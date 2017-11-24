import React from 'react';
import BodyData from './BodyData.js';


export default class Main extends React.Component{
  getBoxes = view => {
    switch(view){
      case 'ex1':
	return [{
	  x: 0.6,
	  y: 0.6,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		{this.state.ex1.e1 ? (<div>
		   <i className="fa fa-check fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Completado!</h4>
		 </div>):(<div>
		   <i className="fa fa-hand-o-down fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Pinchame</h4>
		 </div>)}
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({ex1: Object.assign({}, this.state.ex1, {e1: true})}),
	}];
      case 'ex2':
	return [{
	  x: 0.7,
	  y: 0.2,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		{this.state.ex2.e1 ? (<div>
		   <i className="fa fa-check fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Completado!</h4>
		 </div>):(<div>
		   <i className="fa fa-hand-o-down fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Pinchame</h4>
		 </div>)}
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({ex2: Object.assign({}, this.state.ex2, {e1: true})}),
	},{
	  x: 0.1,
	  y: 0.1,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		{this.state.ex2.e2 ? (<div>
		   <i className="fa fa-check fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Completado!</h4>
		 </div>):(<div>
		   <i className="fa fa-hand-o-down fa-fw w3-center" style={{color: "#086A87"}}></i>
		   <h4>Pinchame</h4>
		 </div>)}
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({ex2: Object.assign({}, this.state.ex2, {e2: true})}),
	}];
      case 'exercises':
	return [{
	  x: 0.02,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-arrow-circle-left fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Back</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({view: null}),
	},{
	  x: 0.37,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-cog fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Ejercicio 1</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({view: 'ex1'}),
	},{
	  x: 0.72,
	  y: 0.012,
	  height: 0.28,
	  width: 0.31,
	  component: (
	    <div className="w3-container w3-padding">
	      <button className="w3-button w3-round w3-white w3-jumbo w3-opacity" style={{width: '100%'}}>
		<i className="fa fa-cog fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Ejercicio 2</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => this.setState({view: 'ex2'}),
	}];
      default:
	return [{
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
		<i className="fa fa-video-camera fa-fw w3-center" style={{color: "#086A87"}}></i>
		<h4>Call</h4>
	      </button>
	    </div>
	  ),
	  onClick: () => {},
	},{
	  x: 0.72,
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
	  onClick: () => {debugger;this.setState({view: 'exercises'})},
	}];
    }
  }
  
  constructor(props){
    super(props);
    this.state = {
      view: null,
      ex1: {e1: false},
      ex2: {e1: false, e2: false},
    };
  }

  componentDidUpdate(){
    if(this.state.view === 'ex1' && this.state.ex1.e1){
      this.setState({
	view: 'exercises',
	ex1: {e1: false},
      });
    } else if (this.state.view === 'ex2' && this.state.ex2.e1 && this.state.ex2.e2){
      this.setState({
	view: 'exercises',
	ex2: {e1: false, e2: false},
      });
    }
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
