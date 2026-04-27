import ResumeSection from "./components/ResumeSection"
import JobDescription from "./components/JobDescription"
import { useCallback, useReducer} from "react"
import type { ChangeEvent } from "react"
import { initialState, reducer } from "./store/formReducer"
import useFileParser from "./hooks/useFileParser"
import useAnalyzer from "./hooks/useAnalyzer"
import ResultPanel from "./components/ResultPanel"
import NavBar from "./components/NavBar"
import HeroSection from "./components/HeroSection"
import ScanningOverlay from "./components/ScanningOverlay"
import pdfIcon from './assets/pdf-icon.svg'
import docxIcon from './assets/docx-icon.svg'
import AnalyzeButton from "./components/AnalyzeButton"


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {text, loading, error, fileType} = useFileParser(state.resume)
  const {result, analyzerLoading, analyzeError, analyze} = useAnalyzer({resumeText : text, jobDescription : state.description})

  const handleJdChange = useCallback((e : ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type : 'JOB_DESCRIPTION', content : e.target.value})
  }, [])

  const handleResumeFileChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    dispatch({type : 'RESUME_FILE', content : file})
  }, [])

  return (
    <div className="2xl:w-[80%] mx-auto bg-white dark:bg-black pb-20 min-h-screen">
      <div>
        <NavBar/>
      </div>
      <div className="mx-auto">
          <HeroSection/>
      </div>
      <div className="bg-purple-50 py-5 md:flex md:w-full md:gap-3 md:px-4 lg:px-7 dark:bg-black transition-transform duration-300">
          <div className="md:flex md:w-full">
            <ResumeSection 
              header="Upload your resume here" 
              setFile={handleResumeFileChange}
              error={error}
              loading={loading}>
              {state.resume ? 
                <div className="flex gap-2 justify-between px-2">
                  <div className="flex">
                  {fileType !== null && <img src={fileType === 'docx' ? docxIcon : pdfIcon} alt="pdf or docx icon" className="h-8 w-8"/>}
                  <p>{state.resume.name}</p>
                  </div>
                  <p>✅</p>
                </div> : 
                <div>Please select a pdf or docx file</div>}
            </ResumeSection>
          </div>
          <div className="md:flex md:w-full">
            <JobDescription 
              header="Insert job description here" 
              textChange={handleJdChange}>
            {state.description}
            </JobDescription>
          </div>
        </div>
      <div>
      <AnalyzeButton analyze={analyze}/>
        {analyzeError && <p className="text-red-500">An error occured while handling your request, please try again</p>}
        {analyzerLoading? 
          <div className="fixed inset-0 w-screen h-screen bg-white/90 dark:bg-black transition-colors duration-300 z-55 flex justify-center items-center">
            <ScanningOverlay/>
          </div>
          : result ? <ResultPanel {...result}/> : null}
      </div>
    </div>
  )
}

export default App