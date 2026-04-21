import ResumeSection from "./components/ResumeSection"
import JobDescription from "./components/JobDescription"


function App() {

  return (
    <div className="flex gap-10 h-screen">
      <ResumeSection header="Resume">Upload your resume here</ResumeSection>
      <JobDescription header="Job description">Paste your job description heres</JobDescription>
    </div>
  )
}

export default App
