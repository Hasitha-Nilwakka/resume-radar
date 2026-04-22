import ResumeSection from "./components/ResumeSection"
import JobDescription from "./components/JobDescription"
import { useCallback, useReducer } from "react"
import type { ChangeEvent } from "react"
import { initialState, reducer } from "./store/formReducer"
import useFileParser from "./hooks/useFileParser"
import useAnalyzer from "./hooks/useAnalyzer"
import ResultPanel from "./components/ResultPanel"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {text, loading, error} = useFileParser(state.resume)
  const {result, analyzerLoading, analyzeError, analyze} = useAnalyzer({resumeText : text, jobDescription : state.description})

  const handleJdChange = useCallback((e : ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type : 'JOB_DESCRIPTION', content : e.target.value})
  }, [])

  const handleResumeFileChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    dispatch({type : 'RESUME_FILE', content : file})
  }, [])

  return (
    <div>
      <div className="flex gap-10 h-screen overflow-hidden">
        <ResumeSection 
          header="Resume" 
          setFile={handleResumeFileChange}
          parsedText={text}
          error={error}
          loading={loading}>
        {state.resume ? state.resume.name : 'No file yet'}
        </ResumeSection>
        <JobDescription 
          header="Job description" 
          textChange={handleJdChange}>
        {state.description}
        </JobDescription>
      </div>
      <div>
        <button onClick={() => analyze()} className="cursor-pointer">Submit</button>
        {analyzeError && <p>An error occured while handling your request, please try again</p>}
        {analyzerLoading? <p>Loading Results</p> : result ? <ResultPanel {...result}/> : null}
      </div>
    </div>
  )
}

export default App
