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

    expect(screen.getByText(/resume/i)).toBeInTheDocument()
    expect(screen.getByText(/job description/i)).toBeInTheDocument()

    expect(screen.getByText(/no file yet/i)).toBeInTheDocument()
  })
})