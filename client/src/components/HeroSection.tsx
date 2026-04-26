import clickIcon from '../assets/click-icon.svg'
import pasteIcon from '../assets/paste-icon.svg'
import seeAnalyzeIcon from '../assets/see-an-icon.svg'
import uploadIcon from '../assets/upload-icon.svg'
import heroImageLight from '../assets/heroImage-light.png'
import heroImageDark from '../assets/darkmode/dark-heroimage.png'

interface HeroImageProps {
    darkMode : boolean
}

export default function HeroSection({darkMode} : HeroImageProps) {
    const divStyle : string = 'flex gap-2 items-center'
    const lineStyle : string = 'font-semibold xl:text-lg'
    return (
        <div className='
                px-5 py-5 flex flex-col border-t-4 
                border-gray-200 dark:border-gray-700 dark:bg-black
                w-screen
                md:flex-row md:justify-center md:w-full md:border-t-0 md:gap-10
                xl:px-10 
                transition-colors duration-300'>
            <div className='md:flex md:flex-col md:pt-5 xl:gap-4 lg:pt-8'>
                <p className='font-bold text-2xl md:text-3xl lg:text-4xl dark:text-white transition-colors duration-300'>Welcome to Resume Radar</p>
                <p className='font-bold text-3xl md:text-4xl lg:text-5xl dark:text-white transition-colors duration-300'>AI-Powered</p>
                <p 
                    className="
                        inline-block 
                        bg-linear-to-r from-[#9333ea] to-[#ef4444]
                        dark:bg-linear-to-r dark:from-dark-crayan dark:to-dark-bright-green
                        transition-colors duration-300 
                        bg-clip-text text-transparent font-bold
                        text-3xl md:text-4xl lg:text-5xl">resume analyzer</p>
            </div>
            <div className='flex flex-col mt-3 mb-3 gap-2 lg:pt-5 xl:gap-6 dark:text-white transition-colors duration-300'>
                <div className={divStyle}>
                    <img src={uploadIcon} alt="upload icon, purple background" />
                    <p className={lineStyle}>Upload your resume</p>
                </div>
                <div className={divStyle}>
                    <img src={pasteIcon} alt="paste icon, red background" />
                    <p className={lineStyle}>Paste the job description</p>
                </div>
                <div className={divStyle}>
                    <img src={clickIcon} alt="click icon, orange background" />
                    <p className={lineStyle}>Click on Analyze</p>
                </div>
                <div className={divStyle}>
                    <img src={seeAnalyzeIcon} alt="chart icon, purple background" />
                    <p className={lineStyle}>See the result of the Analysis</p>
                </div>
            </div>
            <div className='hidden lg:flex'>
                <img 
                    src={!darkMode ? heroImageLight : heroImageDark} 
                    alt="an image of a resume analysis, containes images of a resume, radar, and sample score" 
                    className='lg:w-100'
                />
            </div>
        </div>
    )
}