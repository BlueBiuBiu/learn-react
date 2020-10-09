import React from 'react'
import localStorage from '../hooks/CustomLocalStorageHook'

export default function CustomLocalStorageHook() {
  const [name,setName] = localStorage("name")
  return (
    <div>
      <h2>CustomLocalStorageHook: {name.age}</h2>
      <button onClick={e => setName({name: "sky", age: 16})}>设置name</button>
    </div>
  )
}
