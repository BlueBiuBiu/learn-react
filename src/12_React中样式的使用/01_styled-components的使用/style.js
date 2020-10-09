import styled, { ThemeProvider } from "styled-components"

export const  IndexInput = styled.input.attrs({
  placeholder: "sky",
  bColor: "red"
})`
  background: yellow;
  border-color: ${props => props.bColor};
  ::placeholder{
    color: ${props => props.color};
  }
`

export const IndexWrapper = styled.div`
font-size: 15px;

.app {
  font-size: 30px;
  color: orange;
}
.banners {
  background: lightblue;

  p {
    font-size: 25px;
    &::after {
      content: "我是伪元素"
    }
  }
  /* p::after {
    content: "我是伪元素"
  } */
  .banners-list {
    width: 200px;
    background: greenyellow;

    li {
      padding: 8px;
      
      &.active {
        color: red;
      }
    }
  }
}
`
