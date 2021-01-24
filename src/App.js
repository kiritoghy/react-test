import React, { Component } from 'react';
import { Row, Col, Input, Button, message, Typography  } from 'antd';
import { DatePicker } from 'antd';
import copy from 'copy-to-clipboard';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './App.css';

moment.locale('zh-cn');
const {TextArea} = Input;
const { Title } = Typography;
let weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:'',
      result:'',
      date: moment()
    }
  }

  onChange = (e) => {
    if(e && e.target && e.target.value){
      this.setState({
        value:e.target.value
      })
    }
  }
  onChange2 = (e) => {
    if(e && e.target && e.target.value){
      this.setState({
        result:e.target.value
      })
    }
  }

  onDateChange = (date, dateString) => {
    this.setState({
      date:date
    })
  }

  onClick = () =>{
    let strings = this.state.value.split('\n')
    let info = '';
    info += this.state.date.format("YYYY-MM-DD") + weekday[moment(this.state.date).day()]  + '\n';
    info += '签到时间20:00-20:30\n';
    let index = 1;
    for(let i = 0; i < strings.length; ++i){
      if(strings[i].length > 0 && strings[i].length < 10){
        info += index.toString() + "、" + strings[i] + '\n';
        index++;
      }
    }
    info += '签到结束，实到'+(index-1).toString()+'人。\n';
    this.setState({result:info})
    message.success('转换成功')
  }

  onCopy = () =>{
    if(copy(this.state.result))message.success('复制成功');
    else message.error('复制失败，请手动复制');
  }

  render() {
    return(
      <div style={{
        textAlign: "left",
      }}>
        <Row gutter={[16,16]}>
          <Col span={12} offset={6}>
              <Title className="App" level={2}>
                签到转换 
              </Title>
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          <Col span={12} offset={6}>
            <TextArea 
            rows={15} 
            allowClear
            placeholder="请输入签到的人员"
            onChange = {this.onChange}
            autoSize={{ minRows: 15, maxRows: 15 }}
            />
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          <Col span={12} offset={6}>
            <DatePicker 
              onChange={this.onDateChange} 
              placeholder = "请选择日期"
            />
          </Col>
          <Col span={12} offset={6}>
              <Button type="primary" onClick={this.onClick}>转换</Button>
          </Col>
        </Row>
        <Row gutter={[16,16]}>
          <Col span={12} offset={6}>
            <TextArea 
            rows={15} 
            allowClear
            placeholder="转换结果将在此显示"
            value={this.state.result}
            onChange = {this.onChange2}
            autoSize={{ minRows: 15, maxRows: 15 }}
            />
          </Col>
          <Col span={12} offset={6}>
              <Button type="primary" onClick={this.onCopy}>复制到剪贴板</Button>
          </Col>
        </Row>
        
      </div>
    )
  }
}

export default App;
