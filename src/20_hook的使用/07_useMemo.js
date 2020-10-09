import React, { useState, useMemo } from 'react'

function calcNumber(count) {
  console.log("calcNumber重新计算");
  return count + 1
}

export default function UseMemo() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const total = useMemo(() => {
    return calcNumber(count)
  }, [count])
  return (
    <div>
      <h2>{total}</h2>
      <button onClick={ e => setShow(!show)}>切换</button>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
}
