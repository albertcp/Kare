import React from 'react';
import BodyData from './BodyData.js';


export default class Main extends React.Component{
  getBoxes = view => {
    switch(view){
      case 'exercises':
	return [{
	  x: 0.72,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-video-camera fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Back</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({view: null}),
	}];
      default:
	return [{
	  x: 0.72,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-video-camera fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Call</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => {},
	},{
	  x: 0.02,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-leanpub fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Learn</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => {},
	},{
	  x: 0.37,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-bolt fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Exercises</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({view: 'exercises'}),
	}];
    }
  }
  
  constructor(props){
    super(props);
    this.state = {
      view: null,
    };
  }

  render(){
    const { body_data } = this.props;
    return (
      <div style={{position: 'relative'}}>
	<div style={{zIndex: '90', position: 'absolute', top: '1em'}}>
	  <BodyData body_data={body_data} boxes={this.getBoxes(this.state.view)}/>
	</div>
      </div>
    );
  }
}
