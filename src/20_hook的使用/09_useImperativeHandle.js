import React, { forwardRef, useRef, useImperativeHandle } from 'react'


const HYInput = forwardRef((props,ref) => {
  const inputRef =useRef();
  useImperativeHandle(ref,() => ({
    focus: () =>{
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} type="text"/>
})
export default function UseImperativeHandle() {
  const inputRef = useRef();
  return (
    <div>
      <HYInput ref={ inputRef }/>
      <button onClick={ e => inputRef.current.focus()}>聚焦</button>
    </div>
  )
}
