import React, { createContext } from 'react'
import Index from './练习-localStorage';

export const userContext = createContext();
export const tokenContext = createContext();
export default function index() {
  return (
    <div>
      {/* <userContext.Provider value={{name: "sky", age: 22}}>
        <tokenContext.Provider value="blue">
          <CustomContextShareHook />
        </tokenContext.Provider>
      </userContext.Provider> */}
      <Index />
    </div>
  )
}
