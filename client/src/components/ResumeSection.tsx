import type {ReactNode} from "react"

interface Props {
    header? : string
    children? : ReactNode
}

export default function ResumeSection({header, children} : Props) {
    return (
        <div className="flex-1 bg-gray-200 h-full">
            <h1>{header}</h1>
            <p>{children}</p>
        </div>
    )
}