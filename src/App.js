import React, { Component } from 'react';
import { Row, Col, Input, Button, message, Typography  } from 'antd';
import './App.css';

const {TextArea} = Input;
const { Title } = Typography;

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      value:'',
      result:''
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

  onClick = () =>{
    let strings = this.state.value.split('\n')
    console.log(strings)
    let info = '';
    let index = 1;
    for(let i = 0; i < strings.length; ++i){
      if(strings[i].length > 0 && strings[i].length < 10){
        info += index.toString() + "、" + strings[i] + '\n';
        index++;
      }
    }
    this.setState({result:info})
    message.success('转换成功')
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
        </Row>
        
      </div>
    )
  }
}

export default App;
