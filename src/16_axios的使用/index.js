import React, { PureComponent } from 'react'
// import axios from 'axios'
// import request from '../network/request'
import { getHttpbin } from '../network/httpbin'

export default class index extends PureComponent {

  /*  componentDidMount(){
 
     //第一种
     //get请求
     axios({
       url: "http://www.httpbin.org/get",
       params: {
         name: "skyget",
         age: 22
       }
     }).then(res => {
       console.log(res);
     }).catch(err => {
       console.error(err);
     })
     //post请求
     axios({
       url: "http://www.httpbin.org/post",
       data: {
         name: "skypost",
         age: 22
       },
       method: "POST"
     }).then(res => {
       console.log(res);
     }).catch(err => {
       console.error(err);
     })
 
 
     //第二种
     //get请求
     axios.get("http://www.httpbin.org/get",{
       params: {
         name: "skyGet",
         age: 22
       }
       }).then(res => {
       console.log(res);
     }).catch(err => {
       console.error(err);
     })
     //post请求
     axios.post("http://www.httpbin.org/post",{
         name: "skyPost",
         age: 22
       }).then(res => {
       console.log(res);
     }).catch(err => {
       console.error(err);
     })
 
   }
  */

  //await async
  // async componentDidMount() {

  //   try {
  //     const request = await axios.get("http://www.httpbin.org/get", {
  //     params: {
  //       name: "skyGet",
  //       age: 22
  //       }
  //     })
  //     console.log(request);
  //   } catch(err){
  //     console.error(err);
  //   }
  // }

  componentDidMount(){
    // request({
    //   url: "/get",
    //   params: {
    //     name: "sky",
    //     age: 18
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err);
    // })
    getHttpbin("sky",18).then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>
        App
      </div>
    )
  }
}
