import React from 'react'
import ReactDom from 'react-dom'
import App from './19_React-router-dom'
import 'antd/dist/antd.less'
import { BrowserRouter } from 'react-router-dom'
// import  'moment/locale/zh-cn'
// import 'antd/dist/antd.css'
// import './04_组件间通信案例/style.css'
// import './05_React实现Slot/style.css'
// import './11_组件内容补充/style.css'

ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById("root"))