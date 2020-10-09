import React from 'react'
import ScrollPosition from '../hooks/CustomScrollPositionHook'

export default function CustomScrollPositionHook() {
  const scrollPosition = ScrollPosition();
  return (
    <div style={{padding: "1200px 0"}}>
      <h2 style={{position: "fixed", left: "0", top: "0"}}>滚动的位置: {scrollPosition}</h2>
    </div>
  )
}
