import type { AnalyzerResponse } from "../types/analyzer"
import purpleStars from '../assets/star-purple.svg'
import orangeStars from '../assets/star-orange.svg'
import greenStar from '../assets/darkmode/star-green.svg'
import crayanStar from '../assets/darkmode/star-crayan.svg'
import ScoreBar from "./ScoreBar"
import exclaMarkLightMode from '../assets/excla-light.svg'
import exclaMarkDarkMode from '../assets/darkmode/excla-dark.svg'
import rightMark from '../assets/right-mark.svg'
import rightMarkDark from '../assets/darkmode/dark-right-mark.svg'
import { useTheme } from "../context/ThemeContext"


export default function ResultPanel({score, gaps, suggestions} : AnalyzerResponse) {
    const {darkMode} = useTheme()
    return (
        <div className="
            px-3 py-5 ml-5 mr-5 
            shadow-sm shadow-theme-navy-blue dark:shadow-dark-purple 
            transition-color duration-300 rounded-2xl 
            dark:bg-black">
                <div className="flex gap-2 items-center justify-center">
                    <img 
                        src={!darkMode ? purpleStars : greenStar} 
                        alt="shining small purple stars" 
                        className="opacity-90 transition-transform duration-300"/>
                    <h2 className="
                        text-xl font-semibold 
                        text-theme-mid-blue dark:text-dark-bright-green 
                        transition-color duration-300 
                        xl:text-2xl">Here is your</h2>
                    <h2 className="
                        text-xl text-theme-orange dark:text-dark-crayan 
                        transition-color duration-300 
                        font-bold xl:text-2xl">Analysis</h2>
                    <img 
                        src={!darkMode ? orangeStars : crayanStar} 
                        alt="shining small stars" 
                        className="opacity-90 transition-transform duration-300"/>
                </div>
            <div className="xl:flex xl:gap-5">
                <div className="
                    mt-3 
                    shadow-black/40 shadow-sm dark:shadow-slate-700 
                    transition-color duration-300 
                    flex flex-col gap-5 rounded-2xl px-5 py-5 
                    md:px-40 
                    xl:w-[20%] xl:px-3 xl:justify-center">
                    <h2 className="
                        font-semibold 
                        text-theme-purple dark:text-dark-purple 
                        transition-color duration-300 
                        text-xl text-center">Compatibility Score</h2>
                    <ScoreBar score={score}/>
                    <p className="
                        text-theme-navy-blue dark:text-white/70 
                        transition-color duration-300 
                        px-7 text-center">Your resume currently scores <span className="
                                                                                text-pink-700 dark:text-dark-crayan 
                                                                                transition-color duration-300 
                                                                                font-semibold">{`${score} / 100`}</span> against the target job description.
                    </p>
                </div>
                <div className="
                    shadow-black/40 shadow-sm dark:shadow-slate-700
                    flex flex-col gap-3 rounded-2xl px-5 py-5 mt-5 
                    xl:w-[80%] transition-color duration-300">
                    <h2 className="
                        font-semibold 
                        text-theme-purple text-xl dark:text-dark-purple 
                        transition-color duration-300 ">Key Alignment Gaps</h2>
                    <p className="
                        text-theme-navy-blue dark:text-white/70
                        xl:text-lg  
                        transition-color 
                        duration-300">We identified the following areas where your resume does not yet strongly align with the job requirements:</p>
                    <ul className="flex flex-col gap-3">
                        {gaps.map((gap : string, i : number) => {
                            return <li key={i} className="
                                                bg-purple-50 dark:bg-slate-950 
                                                rounded-2xl 
                                                shadow-sm dark:shadow-slate-700 
                                                transition-color duration-300  
                                                py-3 px-4">
                                        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
                                            <img 
                                            src={!darkMode ? exclaMarkLightMode : exclaMarkDarkMode} 
                                            alt="red exclamation mark with white background" 
                                            className="h-6 w-6 transition-transform duration-300"/>
                                            <p className="dark:text-white/80 transition-colors duration-300">{`${gap}`}</p>
                                        </div>
                                    </li>
                        })}
                    </ul>
                </div>
            </div>
            <div className="
                shadow-black/40 shadow-sm dark:shadow-slate-700
                flex flex-col gap-2 rounded-2xl px-5 py-5 mt-5 
                transition-color duration-300">
                <h2 className="
                    font-semibold 
                    text-theme-purple dark:text-dark-purple 
                    transition-color duration-300 text-xl">Recommended Resume Improvements</h2>
                <p className="
                    text-theme-navy-blue dark:text-white/70 
                    xl:mb-3 xl:text-lg  
                    transition-color duration-300">To strengthen alignment with this role, consider refining your resume in the following ways:</p>
                <ul className="flex flex-col gap-3">
                    {suggestions.map((sug : string, i : number) => {
                        return <li key={i} className="
                                            bg-purple-50 dark:bg-slate-950
                                            rounded-2xl py-3 px-4 
                                            shadow-sm dark:shadow-slate-700 
                                            transition-color duration-300">
                                    <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
                                        <img 
                                            src={!darkMode ? rightMark : rightMarkDark} 
                                            alt="red exclamation mark with white background" 
                                            className="h-6 w-6 transition-transform duration-300"/>
                                        <p className="dark:text-white/80 transition-colors duration-300">{`${sug}`}</p>
                                    </div>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}