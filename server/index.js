import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Simulated data
const metrics = {
  uptimeHours: 12450,
  missions: 986,
  meanTimeBetweenFailureHrs: 720,
}

const news = [
  { id: 1, title: 'BVLOS Certification Milestone', date: '2025-08-21', summary: 'VyomGarud completes BVLOS field evaluations with encrypted telemetry.' },
  { id: 2, title: 'Autonomy v2.1 Released', date: '2025-06-12', summary: 'Improved GNSS-denied navigation and swarm coordination.' },
]

const careers = [
  { id: 1, role: 'Autonomy Engineer', location: 'Bengaluru', type: 'Full-time' },
  { id: 2, role: 'Flight Test Engineer', location: 'Hyderabad', type: 'Full-time' },
  { id: 3, role: 'Embedded Systems Engineer', location: 'Remote', type: 'Contract' },
]

app.get('/api/metrics', (_req, res) => res.json(metrics))
app.get('/api/news', (_req, res) => res.json(news))
app.get('/api/careers', (_req, res) => res.json(careers))

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {}
  console.log('Contact received:', { name, email, message })
  res.json({ ok: true })
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`)
})