import desktopLogo from '../assets/logo-desktop.svg'
import tabLogo from '../assets/logo-tab.svg'
import mobileLogo from '../assets/logo-mobile.svg'
import darkDesktopLogo from '../assets/darkmode/dark-logo-desktop.svg'
import darkTabLogo from '../assets/darkmode/dark-logo-tab.svg'
import darkMobileLogo from '../assets/darkmode/dark-logo-mobile.svg'
import codeIcon from '../assets/code-icon.svg'
import darkCodeIcon from '../assets/darkmode/dark-code-icon.svg'
import reportIcon from '../assets/report-icon.svg'
import darkReportIcon from '../assets/darkmode/dark-report-icon.svg'
import darkModeIcon from '../assets/dark-mode-icon.svg'
import lightModeIcon from '../assets/light-mode-icon.svg'
import { useState } from 'react'
import hamburgIcon from '../assets/hamburg.svg'
import darkHamburg from '../assets/darkmode/dark-hamburg.svg'
import MobileNav from './MobileNav'
import { useTheme } from '../context/ThemeContext'

interface NavBarProps {
    showReport : () => void
}

export default function NavBar({showReport} : NavBarProps) {
    const [hidden, setHidden] = useState(true)
    const {darkMode, flipDarkMode} = useTheme()

    const btnStyle : string = `
        text-theme-pink dark:text-dark-bright-green
        py-1 px-3 rounded-2xl 
        inset-shadow-sm shadow-sm 
        inset-shadow-theme-orange shadow-theme-pink dark:shadow-dark-bright-green dark:inset-shadow-dark-crayan 
        hover:scale-105 transition cursor-pointer`
    const divStyle : string = 'flex items-center gap-2'
    const imgStyle : string = 'h-10 w-10 transition-transform duration-300'

    return (
        <div className='flex items-center justify-between px-5 dark:bg-black transition-colors duration-300'>
            <picture 
            aria-label='main logo of the app, contains images of illutrated radar, resume and text resume-radar. slogan says, AI powered resume scanner'
            className='mt-5 mb-3 lg:w-50 xl:w-60 2xl:w-75'>
                <source media='(min-width: 1024px)' srcSet={!darkMode ? desktopLogo : darkDesktopLogo} />
                <source media='(min-width: 768px)' srcSet={!darkMode ? tabLogo : darkTabLogo}/>
                <img src={!darkMode ? mobileLogo : darkMobileLogo} 
                    alt='main logo of the app, contains images of illutrated radar, resume and text resume-radar. slogan says, AI powered resume scanner'/>
            </picture>
            <div className='hidden lg:flex lg:text-sm lg:font-semibold lg:gap-4 xl:text-lg justify-center '>
                <a className={btnStyle} href='https://github.com/Hasitha-Nilwakka/resume-radar' target='_blank'>
                    <div className={divStyle}>
                        <img src={!darkMode ? codeIcon : darkCodeIcon} alt="small red code icon" className={imgStyle}/>
                        <p>Code / GitHub</p>
                    </div>
                </a>
                <button 
                    className={btnStyle}
                    onClick={showReport}>
                    <div className={divStyle}>
                        <img src={!darkMode ? reportIcon : darkReportIcon} alt="small res report icon" className={imgStyle}/>
                        <p>Sample report</p>
                    </div>
                </button>
                <button 
                    className={btnStyle}
                    onClick={() => flipDarkMode()}>
                    <div className={divStyle}>
                        <img src={!darkMode ? darkModeIcon : lightModeIcon} alt="small red dark and light icon" className='h-7 w-7 transition-transform duration-300'/>
                        <p>{!darkMode ? 'Dark Mode' : 'Light Mode'}</p>
                    </div>
                </button>
            </div>
            <div className='lg:hidden'>
                <div className='
                    shadow-theme-pink inset-shadow-theme-orange dark:shadow-dark-bright-green dark:inset-shadow-dark-crayan 
                    shadow-sm inset-shadow-xs 
                    p-1 rounded-lg cursor-pointer 
                    hover:scale-105 transition'>
                    <img src={!darkMode ? hamburgIcon : darkHamburg} alt='icon of the mobile menue' onClick={() => setHidden(false)}/>
                </div>
                <MobileNav hidden={hidden} shwoModel={showReport} setHidden={setHidden}/>
            </div>
        </div>
    )
}