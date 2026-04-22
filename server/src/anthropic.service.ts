import Anthropic from "@anthropic-ai/sdk";
import 'dotenv/config'
import type { AnalyzerResponse } from "./types";

const anthropic = new Anthropic({
    apiKey : process.env.ANTHROPIC_API_KEY
})

export const analyzeResume = async (resumeText : string, jobDescription : string) : Promise<AnalyzerResponse> => {
    const response = await anthropic.messages.create({
        model : "claude-sonnet-4-6",
        max_tokens : 1024,
        system : "You are an AI resume analyzer. Compare the resume against the job description like an experienced recruiter and provide structured feedback in the exact given json format.", 
        messages : [{role : 'user', content : `
            Resume: ${resumeText}
            Job Description: ${jobDescription}
            
            Return ONLY valid JSON with no markdown, no backticks, no explanation.

            schema
            {
                score: number        // 0-100 compatibility score
                gaps: string[]       // missing skills or experience
                suggestions: string[] // bullet point rewrites
            }`}]
            
    })

    const raw = response.content[0]
    if (raw.type !== 'text') throw new Error('Unexpected respose type')
    const parsed = JSON.parse(raw.text)
    return parsed
}