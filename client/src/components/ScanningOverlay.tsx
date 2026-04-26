import { useEffect, useState } from "react"

const messages : string[] = ["Scanning resume", "Comparing skills", "Generating feedback", "Almost there"]

export default function ScanningOverlay() {
    const [msgIndex, setMsgIndex] = useState(0)
    const [displayText, setDisplayText] = useState("")

        useEffect(() => {
        let i = 0
  

        const typing = setInterval(() => {
            if (i < messages[msgIndex].length) {
            setDisplayText(messages[msgIndex].slice(0, i + 1))
            i++
            } else {
            clearInterval(typing)
            }
        }, 100)

        return () => clearInterval(typing)
        }, [msgIndex])
    useEffect(() => {
        const interval = setInterval(() => {
            setMsgIndex(prev => (prev + 1) % messages.length)
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div>
            <div className="h-75 w-75 xl:h-100 xl:w-100 relative">
                <div className="absolute inset-1 rounded-full blur-xl animate-pulse bg-white/30"></div>
                <div className="absolute inset-1 rounded-full blur-xl animate-pulse [animation-delay:.5s] bg-[conic-gradient(from_0deg,#3b82f6,#9333ea,#ef4444,#3b82f6)]"></div>
                <div className="
                    absolute inset-6 xl:inset-8 rounded-full 
                    bg-white dark:bg-black 
                    transition-colors duration-300
                    flex flex-col items-center justify-ceter pt-25 xl:pt-35">
                <h1 className="text-lg font-bold xl:text-3xl dark:text-white transition-colors duration-300">
                {displayText}
                <span className="animate-pulse text-theme-orange dark:text-dark-bright-green transition-colors duration-300">|</span>
                </h1>               
                <div className="mt-4 xl:mt-6 flex justify-center gap-2">
                    <span className="h-3 w-3 xl:h-5 xl:w-5 rounded-full bg-black/40 dark:bg-white animate-bounce transition-colors duration-300"></span>
                    <span className="h-3 w-3 xl:h-5 xl:w-5 rounded-full bg-black/40 dark:bg-white animate-bounce [animation-delay:.2s] transition-colors duration-300"></span>
                    <span className="h-3 w-3 xl:h-5 xl:w-5 rounded-full bg-black/40 dark:bg-white animate-bounce [animation-delay:.4s] transition-colors duration-300"></span>
                    <span className="h-3 w-3 xl:h-5 xl:w-5 rounded-full bg-black/40 dark:bg-white animate-bounce [animation-delay:.6s] transition-colors duration-300"></span>
                </div>
                </div>
            </div>
        </div>
    )
}