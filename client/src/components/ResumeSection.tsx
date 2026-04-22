import type { ChangeEvent } from "react"

interface ResumeSectionProps {
    header : string
    children : string
    parsedText : string
    error : string | null
    loading : boolean
    setFile : (e : ChangeEvent<HTMLInputElement>) => void
}

export default function ResumeSection({header, children, parsedText, error, loading, setFile} : ResumeSectionProps) {
    return (
        <div className="flex-1 bg-gray-200 h-full">
            <h1>{header}</h1>
            <input 
                type="file" 
                className="border bg-white" 
                accept=".pdf, .docx"
                onChange={setFile}
            />
            {loading && <p>Loading...</p>}
            <p>{children}</p>
            <p>{parsedText}</p>
            <p className="text-red-400">{error}</p>
        </div>
    )
}