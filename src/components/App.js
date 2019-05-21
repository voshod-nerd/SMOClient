import '../assets/css/App.css'
import React, { Component } from 'react'
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Table from 'antd/lib/table';
import { Tabs } from 'antd';
import FirstTab from './FirstTab';
const TabPane = Tabs.TabPane;


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Tabs defaultActiveKey="1" >
    <TabPane tab="Tab 1" key="1">
           <FirstTab></FirstTab>
    </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
    </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
    </TabPane>
        </Tabs>,
      </Row>
    )
  }
}

export default App
