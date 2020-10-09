import { useEffect, useState } from 'react'

function useCustomLocalStorageHook(){
  const [name,setName] = useState(() => {
    const name = window.localStorage.getItem("name")
    return name
  })
  
  useEffect(() => {
    window.localStorage.setItem("name", JSON.stringify(name))
  },[name])

  return [name, setName]
}

export default useCustomLocalStorageHook