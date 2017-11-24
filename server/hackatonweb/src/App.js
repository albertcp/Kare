import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftBar from './LeftBar.js';
import RightBar from './RightBar.js';
import Main from './Main.js';

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      logged_in: 'Pablo',
      body_data: null,
      picture: null,
    };
  };
  
  componentDidMount(){
    const ws = new WebSocket("wss://k-are.eu-gb.mybluemix.net/ws/data");
    ws.onmessage = evt => {
      const { type, payload, pic } = JSON.parse(evt.data);
      switch(type){
	case 'KINECT_DATA':
	  this.setState({
	    body_data: payload,
	  });
	  return true;
	case 'IMAGE_CLASSIFY':
	  this.setState({
	    picture: payload,
	  })
	  return true;
	case 'IMAGE_CLASSIFY_RESPONSE':
	  this.setState({
	    logged_in: payload,
	  });
	  return true;
	default:
	  return false;
      }
    };
  }

  render() {
    if(!this.state.logged_in){
      return (
	<div style={{
	  width: '100vw',
	  height: '100vh',
	  backgroundColor: '#EFF3FB',
	  display: 'flex',
	  justifyContent: 'center',
	  alignItems: 'center',
	  flexDirection: 'column',
	}}>
	  <div className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{cursor: 'default',width: '100%'}}>
	    <i className="fa fa-mobile fa-fw w3-center" style={{color: "#086A87"}}></i>
	    <h4>K-are ID</h4>
	  </div>
	</div>
      );	
    }else{
      return (
	<div className="App" style={{
	  display: 'flex',
	}}>
	  <div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 3}}>
	    <LeftBar logged_in={this.state.logged_in} picture={this.state.picture}/>
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
}

export default App;
