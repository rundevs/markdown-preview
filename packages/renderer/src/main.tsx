import './shim'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/styles/index.css'

const rootNode =
  document.getElementById('root') ?? document.createDocumentFragment()
const root = createRoot(rootNode)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// window.removeLoading()
