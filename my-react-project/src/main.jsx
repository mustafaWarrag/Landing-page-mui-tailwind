import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import FallbackErrorBoundary from './FallbackErrorBoundary.jsx'
//import './index.css'
import './i18n.js'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary fallbackRender={FallbackErrorBoundary}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
