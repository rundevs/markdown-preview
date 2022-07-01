import React from 'react'
import Editor from './components/Editor'
import styles from './assets/styles/app.module.css'

const App: React.FC = () => {

  return (
    <div className={styles.app}>
      <Editor />
    </div>
  )
}

export default App
