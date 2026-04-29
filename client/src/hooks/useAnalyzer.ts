import { useState } from "react"
import type { AnalyzerResponse } from "../types/analyzer"

type AnalyzerInput = {
    resumeText : string
    jobDescription : string
}

interface AnalyzerResult {
    result : AnalyzerResponse | null
    analyzerLoading : boolean
    analyzeError : string | null
    analyze : () => void
    clearError : () => void
}

interface AnalyzerState {
    result : AnalyzerResponse | null
    loading : boolean
    error : string | null
}

const initialState : AnalyzerState = {
    result : null,
    loading : false,
    error : null,
}

export default function useAnalyzer(input : AnalyzerInput) : AnalyzerResult {
    const [state, setState] = useState(initialState)

    const clearError = () => {
        setState(prev => ({...prev, error : null}))
    }

    const analyze = async () => {
        if (!input.resumeText || !input.jobDescription) {
            setState(prev => ({...prev, error : 'Please upload a resume and enter a job description'}))
            return
        }
        try {
            setState(prev => ({...prev, loading : true}))
            const res = await fetch('http://localhost:3001/api/analyze', {
                method : 'POST',
                headers : {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(input)
            })
            const data : AnalyzerResponse = await res.json()

            setState(prev => ({...prev, error : null, result : data}))
        } catch (err : unknown) {
            console.log(err)
            setState(prev => ({...prev, result : null, error : 'API did not respond'}))
        } finally {
            setState(prev => ({...prev, loading : false}))
        }
    }

    return {result : state.result, analyzerLoading : state.loading, analyzeError : state.error, analyze : analyze, clearError : clearError}
}