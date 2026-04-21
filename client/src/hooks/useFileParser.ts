import * as pdfjsLib from "pdfjs-dist"
import workerSrc from "pdfjs-dist/build/pdf.worker?url"
import type {TextItem} from 'pdfjs-dist/types/src/display/api'
import { useEffect, useReducer } from "react"

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

interface PdfResult {
    text : string
    loading : boolean
    error : string | null
}

const initialState : PdfResult = {
    text : '',
    loading : false,
    error : null
}

type ACTION_TYPE = 
    | {type : 'SET_TEXT', content : string}
    | {type : 'SET_LOADING', content : boolean}
    | {type : 'SET_ERROR', content : string | null}
    | {type : 'RESET'}

function reducer(state : PdfResult, action : ACTION_TYPE) : PdfResult {
    switch(action.type) {
        case 'SET_TEXT' : {
            return {...state, text : action.content}
        } case 'SET_LOADING' : {
            return {...state, loading : action.content}
        } case 'SET_ERROR' : {
            return {...state, error : action.content}
        } case 'RESET' : {
            return initialState
        } default : {
            return state
        }
    }
}

export default function useFileParser(input : File | null) : PdfResult  {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        //input empty
        if (!input) {
            dispatch({type : 'RESET'})
            return
        }

        const readPdf = async () => {
            try {
                dispatch({type : 'SET_LOADING', content : true})
                const buffer = await input.arrayBuffer()
                const pdf = await pdfjsLib.getDocument({ data : buffer}).promise

                let fullText = ''

                for (let i : number = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i)
                    const pageContent = await page.getTextContent()

                    const pageText = pageContent.items
                    .filter((item): item is TextItem => 'str' in item)
                    .map((item) => item.str).join(" ");

                    fullText += pageText + "\n"
                }
                
                dispatch({type : 'SET_TEXT' , content : fullText})

            } catch(err : unknown) {
                if (err instanceof Error) {
                    dispatch({type : 'SET_ERROR', content : err.message || 'Failed to read PDF'})
                    dispatch({type : 'SET_TEXT', content : ''})
                }
            } finally {
                dispatch({type : 'SET_LOADING', content : false})
            }
        }
        readPdf()
    }, [input])

    return {text : state.text , loading : state.loading , error : state.error}
}