import React, { PureComponent } from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  .home {
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.themeColor};
  }
`
export default class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <div className="home">我是Home</div>
      </HomeWrapper>
    )
  }
}
