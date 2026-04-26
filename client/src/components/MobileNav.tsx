import codeIcon from '../assets/code-icon.svg'
import darkCodeIcon from '../assets/darkmode/dark-code-icon.svg'
import settingsIcon from '../assets/settings-icon.svg'
import darkSettingsIcon from '../assets/darkmode/dark-settings-icon.svg'
import reportIcon from '../assets/report-icon.svg'
import darkReportIcon from '../assets/darkmode/dark-report-icon.svg'
import lightModeIcon from '../assets/light-mode-icon.svg'
import darkModeIcon from '../assets/dark-mode-icon.svg'

interface MobileNavProps {
    hidden : boolean,
    setHidden : (e : boolean) => void
    darkMode : boolean,
    setColorMode : () => void
}

export default function MobileNav({hidden, setHidden, setColorMode, darkMode} : MobileNavProps) {

    const btnStyle : string = `
        text-theme-pink dark:text-dark-bright-green text-lg font-semibold
        py-2 px-3 rounded-2xl 
        inset-shadow-sm shadow-sm 
        inset-shadow-theme-orange shadow-theme-pink dark:shadow-dark-bright-green dark:inset-shadow-dark-crayan 
        hover:scale-105 transition cursor-pointer`
    const divStyle : string = 'flex items-center gap-2'
    return (
        <div 
        className={`
            fixed inset-0 z-50 transition-all duration-500
            ${!hidden
            ? 'bg-black/60 dark:bg-white/60 opacity-100 pointer-events-auto'
            : 'bg-black/0 opacity-0 pointer-events-none'}
            `} 
        onClick={() => setHidden(true)}>
            <div className={`
                absolute top-0 right-0 h-screen w-[70vw] bg-white dark:bg-black
                md:w-[50vw]
                transform transition-transform duration-500 ease-in-out
                ${!hidden ? 'translate-x-0' : 'translate-x-full'}
                `} 
                onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col gap-10 py-10 px-7'>
                    <p 
                        className="
                            inline-block z-60
                            bg-linear-to-r from-[#9333ea] to-[#ef4444]
                            dark:bg-linear-to-r dark:from-dark-crayan dark:to-dark-bright-green
                            transition-colors duration-300
                            bg-clip-text text-transparent text-3xl font-bold"
                    >Resume-Analyzer</p>
                    <button className={btnStyle}>
                        <div className={divStyle}>
                            <img src={!darkMode ? codeIcon : darkCodeIcon} alt="small red code icon" className='h-10 w-10'/>
                            <p>Code / GitHub</p>
                        </div>
                    </button>
                    <button className={btnStyle}>
                        <div className={divStyle}>
                            <img src={!darkMode ? settingsIcon : darkSettingsIcon} alt="small red settings icon" className='h-10 w-10'/>
                            <p>How it work</p>
                        </div>
                    </button>
                    <button className={btnStyle}>
                        <div className={divStyle}>
                            <img src={!darkMode ? reportIcon : darkReportIcon} alt="small res report icon" className='h-10 w-10'/>
                            <p>Sample report</p>
                        </div>
                    </button>
                    <button 
                    className={`${btnStyle} py-3.5`}
                    onClick={setColorMode}>
                    <div className={divStyle}>
                        <img src={!darkMode ? darkModeIcon : lightModeIcon} alt="small red dark and light icon" className='h-7 w-7'/>
                        <p>{!darkMode ? 'Dark Mode' : 'Light Mode'}</p>
                    </div>
                </button>
                </div>
            </div>
        </div>
    )
}