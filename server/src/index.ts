import express, {Request, Response} from "express"
import cors , {CorsOptions} from "cors"
import { analyzeResume } from "./anthropic.service"
import type { AnalyzerRequest, AnalyzerResponse } from "./types"

const app = express()
const PORT = process.env.PORT || 5000
const corsOptions : CorsOptions = {
    origin : 'http://localhost:5173',
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions))
app.use(express.json())

app.post('/api/analyze', async (req : Request<{}, {}, AnalyzerRequest>, res : Response) => {
    const {resumeText, jobDescription} = req.body

    if (!resumeText || !jobDescription) {
        return res.status(400).json({
            error : "resume and job description are required"
        })
    }

    try {
        const data : AnalyzerResponse = await analyzeResume(resumeText, jobDescription)
        return res.status(200).json(data)
    } catch(err : unknown) {
        if (err instanceof Error) {
            console.log(err)
        }
        return res.status(500).json({error : "Failed to analyze resume"})
    }

})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})