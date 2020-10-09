import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  CHANGE_BANNER,
  FETCH_BANNER
} from './instance'

export const increment = (num) => {
  return {
    type: INCREMENT,
    num
  }
}

export const decrement = (num) => {
  return {
    type: DECREMENT,
    num
  }
}

export const change_banner = (banner) => {
  return {
    type: CHANGE_BANNER,
    banner
  }
}

//redux-thunk中定义的action函数
export const getBanner = (dispatch, getState) => {
  console.log("redux-thunk");
  axios({
    url: "http://123.207.32.32:8000//home/multidata"
  }).then(res => {
    console.log(res.data.data);
    const data = res.data.data
    dispatch(change_banner(data.banner.list))
  })
}

//redux-saga拦截的action
export const fetch_banner = {
  type: FETCH_BANNER
}