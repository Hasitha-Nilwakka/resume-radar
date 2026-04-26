import type { ChangeEvent } from "react"
import resumeIcon from '../assets/document-icon.svg'
import darkResumeIcon from '../assets/darkmode/dark-document-icon.svg'

interface ResumeSectionProps {
    header : string
    children : React.ReactNode
    error : string | null
    loading : boolean
    setFile : (e : ChangeEvent<HTMLInputElement>) => void
    darkMode : boolean
}

export default function ResumeSection({header, children, error, loading, setFile, darkMode} : ResumeSectionProps) {
    return (
        <div 
            className="
                shadow-sm shadow-theme-navy-blue dark:shadow-dark-bright-green dark:shadow-sm dark:inset-shadow-dark-purple dark:inset-shadow-sm
                bg-white dark:bg-black 
                transition-colors duration-300
                px-5 ml-4 mr-4 py-4 mb-4 mt-4 min-h-[40vh] overflow-clip
                flex flex-col gap-5 
                rounded-xl
                md:m-0 md:flex-1
                ">
            <div className="flex gap-4">
                <img 
                    src={!darkMode ? resumeIcon : darkResumeIcon} 
                    alt="graphic of a document in purple color" 
                    className="transition-transform duration-300" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-bold text-theme-purple dark:text-dark-purple transition-colors duration-300">{header}</h1>
                    <p className="text-sm text-theme-purple dark:text-dark-purple transition-colors duration-300">Upload in PDF or DOCX format</p>
                </div>
            </div>
            <div className="
                    flex flex-col gap-4 h-full
                    bg-purple-50 dark:bg-black
                    justify-center items-center py-12 rounded-2xl 
                    border-dashed border border-theme-purple dark:border-dark-purple 
                    transition-colors duration-300">
                <label>
                    <div className="relative overflow-hidden rounded-xl bg-gray-900 p-1 shadow-2xs">
                        <div 
                            className="
                                animate-spin-slow absolute -inset-full 
                                bg-[conic-gradient(from_0deg,#3b82f6,#9333ea,#ef4444,#3b82f6)]">
                        </div>
                        <div className="
                                relative flex items-center justify-center rounded-lg 
                                bg-white dark:bg-black 
                                transition-colors duration-300 
                                hover:scale-80">
                            <p className=" py-5 px-6 text-2xl font-extrabold cursor-pointer text-theme-orange">+</p>
                        </div>
                    </div>
                    <input 
                        type="file" 
                        className="hidden" 
                        accept=".pdf, .docx"
                        onChange={setFile}
                    />
                </label>
                <p className="text-theme-navy-blue dark:text-white/70 transition-colors duration-300">Click here to select your file</p>
            </div>
            {loading && <p>Loading...</p>}
            <div className="
                text-lg text-center py-2 px-2 
                text-theme-navy-blue dark:text-white/70 
                shadow-black/40 shadow-sm 
                rounded-xl 
                transition-colors duration-300">{children}</div>
            <p className="text-red-400">{error}</p>
        </div>
    )
}


