import React, { PureComponent } from 'react'
import { renderRoutes } from 'react-router-config'
import Home from './home'
import About from './about'
import noMatch from './noMatch'
import Product from './Product'
import Detail from './detail'
import routes from '../router/index'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  NavLink,
  Switch,
  withRouter
} from 'react-router-dom'

class index extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: 123
    }
  }
  render() {
    const info = { name: "sky", age: 22 }
    return (
      <div>
        {/* <Link to="/">首页</Link>
        <Link to="/about">关于</Link> */}

        <NavLink exact to="/" activeClassName="nav-active">首页</NavLink>
        <NavLink to="/about" activeClassName="nav-active">关于</NavLink>
        <NavLink to={{
                      pathname: "/detail",
                      // search: "?name=abc",
                      // hash: "#the-hash",
                      state: info
                      }} activeClassName="nav-active">详情
        </NavLink>
        <NavLink to="/product/123">商品test</NavLink>
        <button onClick={e => this.JumpToProducts()}>商品</button>

        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/detail" component={Detail} />
          <Route path="/product/:id" component={Product} />
          <Route component={noMatch} />
        </Switch> */}
        {renderRoutes(routes)}
      </div>
    )
  }
  JumpToProducts() {
    this.props.history.push(`/product/${this.state.id}`)
  }
}

export default withRouter(index)