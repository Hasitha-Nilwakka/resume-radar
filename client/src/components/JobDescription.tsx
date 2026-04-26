import type { ChangeEvent } from "react"
import jdIcon from '../assets/jd-icon.svg'
import darkJdIcon from '../assets/darkmode/dark-jd-icon.svg'

interface JdSectionProps {
    header? : string
    children? : string
    textChange : (e : ChangeEvent<HTMLTextAreaElement>) => void
    darkMode : boolean
}

export default function JobDescription({header, children, textChange, darkMode} : JdSectionProps) {
    return (
        <div 
            className="
                shadow-sm shadow-theme-navy-blue dark:shadow-dark-purple dark:shadow-sm dark:inset-shadow-dark-bright-green dark:inset-shadow-sm
                bg-white dark:bg-black 
                transition-colors duration-300 
                px-5 ml-4 mr-4 py-4 mb-4 mt-4 
                flex flex-col gap-3 rounded-xl min-h-[40vh]
                md:flex-1 md:m-0
                lg:min-h-[60vh]">
            <div className="flex gap-4 mb-2">
                <img 
                    src={!darkMode ? jdIcon : darkJdIcon} 
                    alt="graphic of a document in purple color" 
                    className="transition-colors duration-300"/>
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-bold text-theme-orange dark:text-dark-bright-green transition-colors duration-300">{header}</h1>
                    <p className="text-sm text-theme-orange dark:text-dark-bright-green transition-colors duration-300">Paste the job description to compare</p>
                </div>
            </div>
            <textarea 
                className="
                    bg-white dark:bg-black dark:text-white border 
                    border-theme-orange dark:border-dark-bright-green 
                    transition-colors duration-300 flex-1 resize-none 
                    overflow-scroll rounded-lg p-2" 
                value={children} 
                onChange={textChange}
                placeholder="Paste your job description here"
            ></textarea>
            <div className="bg-purple-100 dark:bg-slate-900 transition-colors duration-300 py-4 px-2 rounded-lg">
                <p className="text-theme-purple dark:text-white/70 transition-colors duration-300">💡<span className="font-semibold ml-2">Tip</span>: include the full description to get the most accurate analysis.</p>
            </div>
        </div>
    )
}