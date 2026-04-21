import ResumeSection from "./components/ResumeSection"
import JobDescription from "./components/JobDescription"
import { useCallback, useReducer } from "react"
import type { ChangeEvent } from "react"
import { initialState, reducer } from "./store/formReducer"
import useFileParser from "./hooks/useFileParser"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {text, loading, error} = useFileParser(state.resume)

  const handleJdChange = useCallback((e : ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({type : 'JOB_DESCRIPTION', content : e.target.value})
  }, [])

  const handleResumeFileChange = useCallback((e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    dispatch({type : 'RESUME_FILE', content : file})
  }, [])

  return (
    <div className="flex gap-10 h-screen">
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
  )
}

export default App
