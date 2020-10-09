import request from './request'

export function getHttpbin(name, age){
  return request({
    url: "/get",
    params: {
      name: name,
      age: age
    }
  })
}