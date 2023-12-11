import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.scss'
import { App } from './App'
import reportWebVitals from './reportWebVitals'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals()
