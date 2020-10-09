import React, { useState } from 'react'

export default function ComplexHook() {
  
  const [student, setstudent] = useState([
    {name: "sky", age: 22},
    {name: "blue", age: 16},
    {name: "coder", age: 25},
  ])

  function addAge(index){
    const newStudent = [...student]
    newStudent[index].age += 1
    setstudent(newStudent)
  }
  return (
    <div>
      <ul>
        {
          student.map((item, index) => {
            return(
              <div key={item.name}>
                <span>姓名: {item.name} 年龄: {item.age}</span>
                <button onClick={ e => addAge(index) }>年龄+1</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}
