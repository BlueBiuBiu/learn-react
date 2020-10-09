import React, { useState, useCallback, memo, useMemo } from 'react'

/**
 * 场景: 在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理.
 */

const HYButton = memo((props) => {
  console.log("执行了HYButton", props.title);
  return <button onClick={props.increment}>HYButton+1</button>
})
export default function UseCallback() {
  const [counter, setCounter] = useState(0)
  const [show, setShow] = useState(true)
  const increment1 = () => {
    console.log("执行了increment1");
    setCounter(counter + 1)
  }
  const increment2 = useCallback(() => {
    console.log("执行了increment2");
    setCounter(counter + 1)
  }, [counter])
  const increment3 = useMemo(() => {
    return () => {
      console.log("执行了increment2");
      setCounter(counter + 1)
    }
  }, [counter])
  return (
    <div>
      useCallback
      <h2>计数: {counter}</h2>
      <HYButton title="btn1" increment={increment1} />
      <HYButton title="btn2" increment={increment2} />
      <HYButton title="btn3" increment={increment3} />

      <button onClick={e => setShow(!show)}>切换</button>
    </div>
  )
}
