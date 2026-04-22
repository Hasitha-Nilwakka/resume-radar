import * as pdfjsLib from "pdfjs-dist"
import * as mammoth from 'mammoth'
import workerSrc from "pdfjs-dist/build/pdf.worker?url"
import type {TextItem} from 'pdfjs-dist/types/src/display/api'
import { useEffect, useReducer } from "react"

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc

interface FileParserResults {
    text : string
    loading : boolean
    error : string | null
}

const initialState : FileParserResults = {
    text : '',
    loading : false,
    error : null
}

const SUPPORT_TYPES = {
    PDF : 'application/pdf',
    DOCX : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
} as const

type ACTION_TYPE = 
    | {type : 'SET_TEXT', content : string}
    | {type : 'SET_LOADING', content : boolean}
    | {type : 'SET_ERROR', content : string | null}
    | {type : 'RESET'}

function reducer(state : FileParserResults, action : ACTION_TYPE) : FileParserResults {
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

export default function useFileParser(input : File | null) : FileParserResults  {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        //input empty
        if (!input) {
            dispatch({type : 'RESET'})
            return
        }

        if(input.type === SUPPORT_TYPES.PDF) {
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
        } else if (input.type === SUPPORT_TYPES.DOCX) {
            const readDocx = async () => {
                dispatch({type : 'SET_LOADING', content : true})
                try {
                    const arrayBuffer = await input.arrayBuffer()
                    const result = await mammoth.extractRawText({arrayBuffer : arrayBuffer})
                    dispatch({type : 'SET_TEXT' , content : result.value})
                }catch (err : unknown) {
                    if (err instanceof Error) {
                        dispatch({type : 'SET_ERROR', content : err.message || 'Failed to read the document'})
                        dispatch({type : 'SET_TEXT', content : ''})
                    }
                } finally {
                    dispatch({type : 'SET_LOADING', content : false})
                }    
            }
            readDocx()
        } else {
            dispatch({type : 'RESET'})
            dispatch({type : 'SET_ERROR', content : "Unsupported file type. Please upload a PDF or DOCX file."})
        }
        
    }, [input])

    return {text : state.text , loading : state.loading , error : state.error}
}