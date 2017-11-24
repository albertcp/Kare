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
      logged_in: null,
      body_data: null,
      picture: null,
      speech: null,
    };
  };
  analyseText = (str) => {
    this.setState({expr:null});
    this.ws.send(JSON.stringify({
      type: 'TONE_ANALYZER',
      payload: str,
    }));
}

  requestTts = (str) => {
    this.setState({speech:null});
    this.ws.send(JSON.stringify({
      type: 'TEXT_SPEECH',
      payload: str,
    }));
  }
  
  componentDidMount(){
    this.ws = new WebSocket("wss://k-are.eu-gb.mybluemix.net/ws/data");
    this.ws.onmessage = evt => {
      const { type, payload } = JSON.parse(evt.data);
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
	case 'SPEECH_RESPONSE':
	  this.setState({
	    speech: payload,
	  })
	  return true;
	case 'IMAGE_CLASSIFY_RESPONSE':
	  this.setState({
	    logged_in: payload,
	  });
	  return true;
	case 'TONE_ANALYZER_RESPONSE':
	  debugger;
	  this.setState({
	    expr: payload,
	  });
	  return true;
	case 'VOICE_RECOGNITION_RESPONSE':
	  if(/uno/.test(payload)){
	    this.refs.main.setState({view: 'ex1'});
	  }else if(/dos/.test(payload)){
	    this.refs.main.setState({view: 'ex2'});	    
	  }
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
	  <button onClick={() => this.setState({logged_in: 'guest'})}>
	    Entrar como invidato
	  </button>
	</div>
      );	
    }else{
      return (
	<div className="App" style={{
	  display: 'flex',
	}}>
	   {this.state.speech ? <audio
              src={`data:audio/ogg;base64,${this.state.speech}`}
	      autoPlay>
	    Your browser does not support the <code>audio</code> element.
	   </audio> : ''}
	 <div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 3}}>
	    <LeftBar logged_in={this.state.logged_in} picture={this.state.picture}/>
	  </div>
	  <div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 6}}>
	    <Main ref='main' body_data={this.state.body_data} tts={this.requestTts}/>
	  </div>
	  <div style={{backgroundColor: '#EFF3FB', height: '100vh', flex: 3}}>
	    <RightBar analyseText={this.analyseText}/>
	  </div>
	</div>
      );
    }
  }
}

export default App;
