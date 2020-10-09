import React, { useContext } from 'react'
import {
  UserInfo,
  ProfileInfo
} from './index'

export default function UseConetxt() {
  const userInfo = useContext(UserInfo);
  const profileInfo = useContext(ProfileInfo);
  console.log(userInfo,profileInfo);
  return (
    <div>
      <h2>useContext</h2>
    </div>
  )
}
