import type { ChangeEvent } from "react"

interface ResumeSectionProps {
    header : string
    children : string
    setFile : (e : ChangeEvent<HTMLInputElement>) => void
}

export default function ResumeSection({header, children, setFile} : ResumeSectionProps) {
    return (
        <div className="flex-1 bg-gray-200 h-full">
            <h1>{header}</h1>
            <input 
                type="file" 
                className="border bg-white" 
                accept=".pdf, .doc, .docx"
                onChange={setFile}
            />
            <p>{children}</p>
        </div>
    )
}