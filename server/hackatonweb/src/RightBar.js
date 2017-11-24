import React from 'react';

export default class RightBar extends React.Component{
  constructor(props){
    super(props);
    this.state={expr: ''}
  }
  render(){
    return (
      <div style={{padding: '1em', textAlign: 'left'}} className="w3-row">
	<div className="w3-card w3-round w3-white">
	  <div className="w3-container w3-padding">	
	    <br/><h4>Calendario</h4>
	    <hr/>
	    <b><p>Cita especialista</p></b>
	    <p>22/12/2017 - 16:30</p>
	    <hr/>
	    <b><p>Ejercicio de hombros</p></b>
	    <p>Hoy</p>
	  </div>
	  <input type='text' onChange={e => this.setState({expr: e.target.value})} value={this.state.expr} placeholder='Reconocimiento de expresiones'/>
	  <button onClick={() => this.props.analyseText(this.state.expr)}>Enviar</button>
	</div>
      </div>
    );
  }
}
