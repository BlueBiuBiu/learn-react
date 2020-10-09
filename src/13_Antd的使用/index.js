import React, { PureComponent } from 'react'
import { TimePicker, DatePicker, Space } from 'antd';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <TimePicker minuteStep={15} secondStep={10} />
        <Space direction="vertical">
          <DatePicker onChange={e => this.onChange()} />
        </Space>
      </div>
    )
  }
  onChange(date, dateString) {
    console.log(date, dateString);
  }
  
}
