import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'styles/index.css'

const rootNode = document.getElementById('root') ?? document.createDocumentFragment()

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

window.removeLoading()
