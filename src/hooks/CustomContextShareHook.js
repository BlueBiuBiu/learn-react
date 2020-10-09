import { useContext } from 'react'
import {
  userContext,
  tokenContext
} from '../21_自定义hook/index'

function useCustomContextShareHook(){
  const user = useContext(userContext);
  const token = useContext(tokenContext);

  return [user, token]
}

export default useCustomContextShareHook