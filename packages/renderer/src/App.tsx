import os from 'os'
import React, { useCallback, useEffect, useState } from 'react'
import CodeEditor from './components/Editor/CodeEditor'
import style from './assets/styles/app.module.css'
import Preview from './components/Preview/Preview'
import { exampleMarkdown } from './utils/example'
import NavBar from './components/Navigation/NavBar'

const changeStyle = () => {
  document.body.style.backgroundColor = 'transparent'
}

export const isLinux = os.platform() === 'linux'

const App: React.FC = (): JSX.Element => {
  const [doc, setDoc] = useState<string>(exampleMarkdown)

  useEffect(() => {
    if (isLinux) {
      changeStyle()
    }
    return () => {
      // clean effect
    }
  }, [])

  const handleDocChange = useCallback((newDoc: string): void => {
    setDoc(newDoc)
  }, [])

  return (
    <main className={style.layout}>
      <NavBar />
      <div className={style.app}>
        <CodeEditor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
      </div>
    </main>
  )
}

export default App
