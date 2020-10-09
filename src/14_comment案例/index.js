import React, { PureComponent } from 'react'
import CommentInput from "./components/CommentInput"
import CommentItem from "./components/CommentItem"

export default class index extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      commentList: []
    }
  }
  render() {
    const { commentList } = this.state;
    return (
      <div style={{width: "500px", padding: "20px"}}>
        {
          commentList.map((item,index) => {
            return <CommentItem key={ item.id } comment={ item } removeItem={ e => this.removeItem(index)}/>
          })
        }
        <CommentInput addComment={ info => this.addComment(info)}/>
      </div>
    )
  }
  addComment(info){
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }
  removeItem(index){
    const newCommentList = [...this.state.commentList];
    newCommentList.splice(index,1)
    this.setState({
      commentList: newCommentList
    })
  }
}
