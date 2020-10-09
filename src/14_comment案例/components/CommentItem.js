import React, { PureComponent } from 'react'
import { Comment, Tooltip, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons'

export default class CommentItem extends PureComponent {
  render() {
    const { avatar, nickName, dateTime, content } = this.props.comment;
    return (
      <div>
        <Comment
          author={<a href="/#">{nickName}</a>}
          avatar={<Avatar src={ avatar } alt={ nickName }/>}
          content={<p>{content}</p> }
          datetime={
            <Tooltip title={dateTime.format('YYYY-MM-DD HH:mm:ss')}>
              <span>{dateTime.fromNow()}</span>
            </Tooltip>
          }
          actions={
            [
              <span onClick={ e => this.removeComment()}><DeleteOutlined />删除</span>
            ]
          }
        />
      </div>
    )
  }
  removeComment(){
    this.props.removeItem();
  }
}
