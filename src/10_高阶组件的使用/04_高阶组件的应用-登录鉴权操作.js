import React, { PureComponent } from 'react'

class LoginPage extends PureComponent{
  render(){
    return(
      <div>
        <h2>LoginPage</h2>
      </div>
    )
  }
}
class CartPage extends PureComponent{
  render(){
    return(
      <div>
        <h2>CartPage</h2>
      </div>
    )
  }
}
function withAuth(WrappedComponent){
  return props => {
    const { isLogin } = props;
    if(isLogin){
      return <WrappedComponent {...props} />
    }
    else{
      return <LoginPage />
    }
  }
}
const AuthCart = withAuth(CartPage)
export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCart isLogin={ true }/>
      </div>
    )
  }
}
