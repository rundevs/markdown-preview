import React, { useCallback, useEffect, useState } from 'react'
import useCodeMirror from '../../hooks/useCodeMirror'
import style from './editor.module.css'
import useMouseHover from '../../hooks/useMouseHover'

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
  const [refContainer] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })
  const [, handleHover] = useMouseHover(refContainer)

  return (
    <div
      // onMouseEnter={handleHover}
      // onMouseLeave={handleHover}
      ref={refContainer}
      className={style.editorWrapper}
    />
  )
}

export default CodeEditor
