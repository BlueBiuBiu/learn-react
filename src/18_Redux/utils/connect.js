import React, { PureComponent } from 'react'
import store from '../store/index'

export function connect(mapStateToProps, mapDispatchToProps){
  return function enhanceHOC(WrappedComponent){
    return class extends PureComponent{
      constructor(props){
        super(props);
        this.state={
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }
      componentWillUnmount(){
        this.unsubscribe()
      }
      render(){
        return <WrappedComponent {...mapStateToProps(store.getState())}
                                {...mapDispatchToProps(store.dispatch)}/>
      }
    }
  }
}