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

const mockScore : number = 75
const mockGaps : string[] = ['No direct experience in express transportation, logistics, or courier/shipment operations',
'No mention of handling inbound customer calls in a high-volume call center environment',
'No experience with shipment tracking systems or logistics software (e.g., FedEx internal systems)',
'Limited evidence of delivery coordination or failed delivery resolution workflows',
'Finnish language proficiency listed as basic, which may be a barrier for customer-facing role in Finland',
'No experience with real-time prioritization and reallocation of physical deliveries',
'No explicit mention of working with strict operational deadlines in a transportation context']
const mockSuggestions : string[] = ['Reframe MetLife support desk experience to emphasize high-volume inbound inquiry handling, strict SLA adherence, and real-time case prioritization — closely mirroring FedEx call handling requirements',
'Highlight the SL Rainbow Holdings export coordination role by emphasizing shipment logistics, delivery tracking, and buyer communication to align with FedExs operational context',
'Add a specific bullet under MetLife or Rainbow Holdings referencing data entry accuracy and use of tracking or operational systems to match FedExs in-house system data entry requirement',
'Rewrite the professional summary to mention logistics, shipment support, or transportation operations rather than focusing solely on IT sales ambitions, which are misaligned with this role',
'Quantify communication and collaboration achievements (e.g., number of daily inquiries handled, response time improvements) to demonstrate ability to perform in a fast-paced environment',
'Mention any experience with failed order resolution or exception management to align with the failed shipment investigation responsibility',
'Consider adding a line about Finnish language improvement efforts or willingness to work in multilingual environments to address the language gap'
]

interface ResultPanelProps {
    analyzerResponse : AnalyzerResponse,
    darkMode : boolean
}

export default function ResultPanel({analyzerResponse, darkMode} : ResultPanelProps) {
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
                    <ScoreBar score={mockScore}/>
                    <p className="
                        text-theme-navy-blue dark:text-white/70 
                        transition-color duration-300 
                        px-7 text-center">Your resume currently scores 
                            <span className="
                                text-pink-700 dark:text-dark-crayan 
                                transition-color duration-300 
                                font-semibold">{`${mockScore} / 100`}</span> against the target job description.
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
                        {mockGaps.map((gap : string, i : number) => {
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
                    {mockSuggestions.map((sug : string, i : number) => {
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