import React, { useCallback, useRef, useState } from 'react'
import CodeEditor from './components/Editor/CodeEditor'

const example = `# Hello, World.

Here is some Markdown.`

const App = (): JSX.Element => {
  const [doc, setDoc] = useState<string>(example)
  const handleDocChange = useCallback((newDoc: any) => {
    setDoc(newDoc)
  }, [])

  return (
    <div>
      <CodeEditor onChange={handleDocChange} initialDoc={doc} />
    </div>
  )
}

export default App
