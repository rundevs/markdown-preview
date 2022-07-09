import React, { useCallback, useState } from 'react'
import CodeEditor from './components/Editor/CodeEditor'
import style from './assets/styles/app.module.css'
import Preview from './components/Preview/Preview'
import { exampleMarkdown } from './utils/example'

const App = (): JSX.Element => {
  const [doc, setDoc] = useState<string>(exampleMarkdown)
  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className={style.app}>
      <CodeEditor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  )
}

export default App
