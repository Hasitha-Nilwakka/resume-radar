import { vi } from 'vitest'

vi.mock('pdfjs-dist', () => ({
  GlobalWorkerOptions: {
    workerSrc: '',
  },
  getDocument: vi.fn(),
}))

vi.mock('pdfjs-dist/build/pdf.worker?url', () => ({
  default: '',
}))

import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import useFileParser from "../hooks/useFileParser";

describe('useFileParser', () => {
    it('Passing null resets the state to initial', () => {
        const {result} = renderHook(() => useFileParser(null))

        expect(result.current).toEqual({
            text : '',
            loading : false,
            error : null
        })
    })

    it('Unsupported file type dispatches the correct error message',async () => {
        const textFile = new File(
            ['hello resume radar'],
            'test.txt',
            { type : 'text/plain'}
        )

        const {result} = renderHook(() => useFileParser(textFile))

        await waitFor(() => {
            expect(result.current.error).toBe("Unsupported file type. Please upload a PDF or DOCX file.")
        })

    })
})