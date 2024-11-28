import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>oh hai</h1>
    <h2> testing to see if this shows up </h2>
    <App />
  </StrictMode>,
)
