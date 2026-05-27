import { Routes, Route, Navigate } from 'react-router-dom'
import {
  Home,
  DecodeZone,
  SignalAlerts,
  SignalCheck,
  SignalReport,
  SignalShield,
} from './pages'
import Layout from './components/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/decode-zone" element={<DecodeZone />} />
        <Route path="/signal-alerts" element={<SignalAlerts />} />
        <Route path="/signal-check" element={<SignalCheck />} />
        <Route path="/signal-report" element={<SignalReport />} />
        <Route path="/signal-shield" element={<SignalShield />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
