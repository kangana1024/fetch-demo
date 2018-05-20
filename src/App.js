import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { Card, List, Spin } from 'antd';
import './App.css';

class App extends Component {
  componentDidMount = async () => {
    let data = await fetch('http://59b1622bffff010011b4efa0.mockapi.io/api/v1/todo').then((res) => res.json())
    let dataSource = data.result.data
    console.log(data)
    this.setState({ dataSource: dataSource })
  }
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  render() {
    return (
      <div className="App">
      {this.state.dataSource.length>0?
      <Card style={{ width: 500 }}>
        <List
          bordered
          dataSource={this.state.dataSource}
          renderItem={(item, index) => (
            <List.Item onClick={()=>{alert('ccc')}}>
              {item}
            </List.Item>
          )}
        />
        </Card>:<Spin />}
      </div>
    );
  }
}

export default App;
