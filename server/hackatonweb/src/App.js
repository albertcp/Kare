import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './LeftBar.js';
import RightBar from './RightBar.js';
import Main from './Main.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      body_data: null,
      facial_rec: null,
    };
  };
  
  componentDidMount(){
    const ws = new WebSocket("wss://k-are.eu-gb.mybluemix.net/ws/data");
    ws.onmessage = evt => {
      const { type, payload } = JSON.parse(evt.data);
      switch(type){
	case 'KINECT_DATA':
	  this.setState({
	    body_data: payload,
	  });
	  return true;
	case 'IMAGE_CLASSIFY_RESPONSE':
	  this.setState({
	    facial_rec: payload,
	  });
	  return true;
	default:
	  return false;
      }
    };
  }

  render() {
    return (
      <div className="App" style={{
	display: 'flex',
      }}>
	<div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 3}}>
	  <LeftBar/>
	</div>
	<div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 6}}>
	  <Main body_data={this.state.body_data}/>
	</div>
	<div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 3}}>
	  <RightBar/>
	</div>
      </div>
    );
  }
}

export default App;
