import type { ChangeEvent } from "react"

interface JdSectionProps {
    header? : string
    children? : string
    textChange : (e : ChangeEvent<HTMLTextAreaElement>) => void
}

export default function JobDescription({header, children, textChange} : JdSectionProps) {
    return (
        <div className="flex-1 bg-gray-200 h-full">
            <h1>{header}</h1>
            <textarea 
                className="border bg-white" 
                value={children} 
                onChange={textChange}
            ></textarea>
        </div>
    )
}