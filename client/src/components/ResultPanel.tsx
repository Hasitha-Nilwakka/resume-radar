import type { AnalyzerResponse } from "../types/analyzer"

export default function ResultPanel({score, gaps, suggestions} : AnalyzerResponse) {
    return (
        <div>
            <p>{score}</p>
            <div>
                <ul>
                    {gaps.map((gap : string, i : number) => {
                        return <li key={i}>{gap}</li>
                    })}
                </ul>
            </div>
            <div>
                <ul>
                    {suggestions.map((sug : string, i : number) => {
                        return <li key={i}>{sug}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}