import { useEffect, useRef, useState } from "react"

type DemoPhase = 'idle' | 'scanning' | 'results'

interface SampleReport {
    phase : DemoPhase
    startDemo : () => void
    resetDemo : () => void
}

export default function useSampleReport() : SampleReport {
    const [phase, setPhase] = useState<DemoPhase>('idle')
    const timeOutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const startDemo = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }

        setPhase('scanning')

        timeOutRef.current = setTimeout(() => {
            setPhase('results')
            timeOutRef.current = null
        }, 5000)
    }

    const resetDemo = () => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
            timeOutRef.current = null
        }

        setPhase('idle')
    }

    useEffect(() => {
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current)
            }
        }
    }, [])

    return {phase, startDemo, resetDemo}
}