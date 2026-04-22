export type AnalyzerRequest = {
    resumeText : string
    jobDescription : string
}

export type AnalyzerResponse = {
    score : number
    gaps : string[]
    suggestions : string[]
}