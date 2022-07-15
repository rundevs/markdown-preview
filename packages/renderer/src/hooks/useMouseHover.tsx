import {useState, useEffect} from 'react'
function useMouseHover(ref: React.RefObject<HTMLElement>) {
  const [mouseHover, setMouseHover] = useState<boolean>(false)

  const handleHover = (): void => setMouseHover(!mouseHover)

  let cleanup = true
  useEffect(() => {
    if (cleanup) {
      if (mouseHover && ref.current) {
        ref.current?.getElementsByClassName('cm-scroller')[0].classList.add('scrollbar-visible')
        ref.current?.getElementsByClassName('cm-scroller')[0].classList.remove('scrollbar-hidden')
      } else {
        ref.current?.getElementsByClassName('cm-scroller')[0].classList.add('scrollbar-hidden')
        ref.current?.getElementsByClassName('cm-scroller')[0].classList.remove('scrollbar-visible')
      }
    }
    return () => {
      cleanup = false
    }
  }, [mouseHover, ref])

  return [mouseHover, handleHover]
}

export default useMouseHover
