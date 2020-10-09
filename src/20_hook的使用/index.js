import React, { createContext } from 'react'
import UseReducer from './10_useLayoutEffect'

export const UserInfo = createContext();
export const ProfileInfo = createContext();
export default function Index() {
  //useEffect
  // const [isShow, setisShow] = useState(true);
  // const [counter, setCounter] = useState(10);
  // return (
  //   <div>
  //     { isShow && <HookTitleChange />}
  //     <button onClick={ e => setCounter(counter-1)}>-1</button>
  //     <button onClick={ e => setisShow(!isShow) }>切换</button>
  //   </div>
  // )

  //useContext
  // return(
  //   <div>
  //     <UserInfo.Provider value={{name: "sky", age: 22}}>
  //       <ProfileInfo.Provider value={{name: "blue", age: 16}}>
  //         <UseConetxt />
  //       </ProfileInfo.Provider>
  //     </UserInfo.Provider>
  //   </div>
  // )

  return(
    <div>
      <UseReducer />
    </div>
  )
}
