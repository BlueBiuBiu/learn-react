import React, { useState, useEffect } from 'react'

export default function TitleChange() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter
    console.log("订阅事件");
    return(() => {
      console.log("取消订阅");
    })
  },[])
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
