import { useEffect, useState } from 'react'

function useCustomScrollPositionHook(){
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return(() => {
      window.removeEventListener("scroll", handleScroll)
    })
  },[])

  return scrollPosition
}

export default useCustomScrollPositionHook