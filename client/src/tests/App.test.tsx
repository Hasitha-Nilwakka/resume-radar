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

import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  it('renders main sections', () => {
    render(<App />)

    expect(screen.getByText(/Upload your resume here/i)).toBeInTheDocument()
    expect(screen.getByText(/Insert job description here/i)).toBeInTheDocument()

    expect(screen.getByText(/Please select a pdf or docx file/i)).toBeInTheDocument()
  })
})