# ResumeRadar 🎯

An AI-powered resume analyzer that compares your resume against a job description and returns a compatibility score, key alignment gaps, and actionable improvement suggestions.

---

## ✨ Features

- **Resume Parsing** — Upload a PDF or DOCX resume and extract its text directly in the browser
- **AI Analysis** — Powered by Claude (Anthropic) to score compatibility, identify gaps, and suggest rewrites
- **Sample Report** — See a live demo of the analysis output without uploading anything
- **Dark Mode** — Full dark/light theme toggle with custom assets for each mode
- **Responsive Design** — Works on mobile, tablet, and desktop with a dedicated mobile navigation drawer

---

## 🛠️ Tech Stack

### Frontend
- [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS v4](https://tailwindcss.com/) — styling
- [pdfjs-dist](https://github.com/mozilla/pdf.js/) — PDF parsing in the browser
- [mammoth.js](https://github.com/mwilliamson/mammoth.js/) — DOCX parsing in the browser

### Backend
- [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/) and TypeScript
- [Anthropic SDK](https://github.com/anthropics/anthropic-sdk-node) — Claude AI integration

---

## 📁 Project Structure

```
resume-radar/
├── client/                     # React frontend
│   └── src/
│       ├── components/         # UI components
│       ├── context/            # ThemeContext and ThemeProvider
│       ├── data/               # Mock data for sample report
│       ├── hooks/              # Custom hooks
│       │   ├── useAnalyzer.ts
│       │   ├── useFileParser.ts
│       │   └── useSampleReport.ts
│       ├── store/              # useReducer state
│       │   └── formReducer.ts
│       └── types/              # Shared TypeScript types
│           └── analyzer.ts
└── server/                     # Express backend
    └── src/
        ├── index.ts            # Express app entry point
        ├── anthropic.service.ts # Claude API integration
        └── types.ts            # Shared backend types
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- An [Anthropic API key](https://console.anthropic.com/)

### 1. Clone the repository

```bash
git clone https://github.com/Hasitha-Nilwakka/resume-radar.git
cd resume-radar
```

### 2. Start the backend

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```env
PORT=3001
ANTHROPIC_API_KEY=your_api_key_here
```

```bash
npm run dev
```

The server runs on `http://localhost:3001`

### 3. Start the frontend

```bash
cd client
npm install
npm run dev
```

The app runs on `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable | Location | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | `server/.env` | Your Anthropic API key |
| `PORT` | `server/.env` | Port for the Express server (default: 3001) |

> ⚠️ Never commit your `.env` file. It is included in `.gitignore` by default.

---

## 🧠 How It Works

1. **Upload** your resume in PDF or DOCX format — parsed entirely in the browser, never stored
2. **Paste** the job description you want to compare against
3. **Click Analyze** — your resume text and job description are sent to the Express server
4. The server calls the **Claude API** with a structured prompt and returns JSON
5. Results are displayed as a **compatibility score**, **gap cards**, and **improvement suggestions**

---

## 🪝 React Hooks Used

| Hook | Where |
|------|-------|
| `useState` | `useAnalyzer`, `ScanningOverlay`, `NavBar` |
| `useEffect` | `useFileParser`, `ScanningOverlay`, `useSampleReport` |
| `useReducer` | `App.tsx`, `useFileParser` |
| `useCallback` | `App.tsx` event handlers |
| `useContext` | `NavBar`, `ResultPanel`, `JobDescription`, `ResumeSection` |
| `useRef` | `useSampleReport` timer cleanup |
| Custom hooks | `useFileParser`, `useAnalyzer`, `useSampleReport` |

---

## 📜 API Reference

### `POST /api/analyze`

Analyzes a resume against a job description.

**Request body:**
```json
{
  "resumeText": "string",
  "jobDescription": "string"
}
```

**Response:**
```json
{
  "score": 75,
  "gaps": ["missing skill 1", "missing skill 2"],
  "suggestions": ["rewrite bullet 1", "rewrite bullet 2"]
}
```

**Error responses:**

| Status | Meaning |
|--------|---------|
| `400` | Missing resume or job description |
| `500` | Claude API call failed |

---

## 🌐 Deployment

- **Frontend** — deployed on [Vercel](https://vercel.com/). Set root directory to `client`.
- **Backend** — deployed on [Railway](https://railway.app/). Set root directory to `server`. Add `ANTHROPIC_API_KEY` as an environment variable.

---

## 📄 License

MIT