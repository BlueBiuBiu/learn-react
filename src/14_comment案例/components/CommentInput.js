import React, { PureComponent } from 'react'
import moment from 'moment'
import{
  Input,
  Button
} from "antd"

export default class CommentInput extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      content: ""
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }}
              value={this.state.content}
              onChange={ e => this.handleChange(e)}
        />
        <Button type="primary" onClick={ e => this.submitComment()}>提交评论</Button>
      </div>
    )
  }
  handleChange(event){
    this.setState({
      content: event.target.value
    })
  }
  submitComment(){
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1055388296,1425226147&fm=26&gp=0.jpg",
      nickName: "sky",
      dateTime: moment(),
      content: this.state.content
    }
    this.props.addComment(commentInfo)
    this.setState({
      content: ""
    })
  }
}
