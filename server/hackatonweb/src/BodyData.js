import React, { Component } from 'react';

const MIN_X = -1;
const MIN_Y = -1;
const MAX_X = 1.2;
const MAX_Y = 1.2;

const WIDTH = 650;
const HEIGHT = 600;

const adjustPoint = (positions) => {
  const x = positions[0].x;
  const y = positions[0].y;
  return [((x-MIN_X)/(MAX_X-MIN_X)), (1-(y-MIN_Y)/(MAX_Y-MIN_Y))];
}

const scalePoint = ([x,y]) => [x*WIDTH, y*HEIGHT];

const inBox = ({x,y,width, height}, [px,py]) =>
  px > x && px < x + width && py > y && py < y + height;

const connections = {};

export default class BodyData extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selected_box: null,
      cont_secs: 0,
    }
    setInterval(() => {
      const hand_positions = this.props.body_data && this.props.body_data.user && this
	.props
	.body_data.user
	.map(user => user
	  .bodyParts
	  .filter(part => part.name==='HandRight' || part.name==='HandLeft')
	  .map(part => part.positions)
	)				     
	.reduce((p,c) => p.concat(c),[]) || [];
      const box = this.props.boxes.findIndex(box => hand_positions.some(pos => inBox(box, adjustPoint(pos))));
      console.log(box);
      this.setState({
	selected_box: box,
	cont_secs: this.state.selected_box === box && this.state.cont_secs + 1 || 1, 
      });
    }, 200);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.selected_box !== -1 && this.state.cont_secs > 10){
      this.props.boxes[this.state.selected_box].onClick();
      this.setState({cont_secs: 0, selected_box: -1})
    }
  }
  
  render(){
    const {body_data, boxes} = this.props;
    return (
      <div style={{position: 'relative'}}>
	{boxes.map((box, i) => (
	   <div key={i} style={{
	     position: 'absolute',
	     top: box.y * HEIGHT,
	     left: box.x * WIDTH,
	     width: box.width * WIDTH,
	     height: box.height * HEIGHT,
	   }}>
	     {box.component}
	   </div>
	 ))}
	   <svg width={WIDTH} height={HEIGHT} version="1.1" xmlns="http://www.w3.org/2000/svg">
	     {body_data && body_data.user && body_data.user.map((user, i) => (
		user && user.bodyParts && user.bodyParts.map(part => {
		  const [x,y] = scalePoint(adjustPoint(part.positions));
		  return (
		    <circle stroke={part.name==='HandLeft' && 'red' || 'blue'} cx={x} cy={y} r="5"/>
		  );
		})
	      ))}
	   </svg>
      </div>
    );
  }
}
