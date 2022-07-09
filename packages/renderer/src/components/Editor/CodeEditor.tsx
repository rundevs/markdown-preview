import React, { useCallback, useEffect } from 'react'
import useCodeMirror from '../../hooks/useCodeMirror'
import style from './editor.module.css'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
}

const CodeEditor: React.FC<Props> = props => {
  const { onChange, initialDoc } = props
  const handleChange = useCallback(
    (state: any) => onChange(state.doc.toString()),
    [onChange]
  )
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return (
    <div
      ref={refContainer}
      className={style.editorWrapper}
    />
  )
}

export default CodeEditor
