import React, { PureComponent } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

export function History(props){
  return <div>History</div>
}
export function Connect(props){
  return <div>Connect</div>
}

export default class about extends PureComponent {
  render() {
    //console.log(this.props.route.routes);
    return (
      <div>
        <NavLink exact to="/about" activeClassName="nav-active">历史</NavLink>
        <NavLink to="/about/connect" activeClassName="nav-active">联系</NavLink>

        {/* <Switch>
          <Route exact path="/about" component={History}/>
          <Route path="/about/history" component={Connect}/>
        </Switch> */}
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
