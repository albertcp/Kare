import React from 'react';

export default () => (
  <div style={{
    margin: '1em',
  }} className="w3-card w3-round w3-white">
    <div className="w3-container"> 
      <br/>
      <p className="w3-left w3-container">
	<img
	    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/PabloJavkin2.jpg/250px-PabloJavkin2.jpg"
	    className="w3-circle "
	    style={{
	      height:"106px",
	      width:"106px",
	    }}
	    alt="Avatar"
	/>
      </p>	 
      <h4 className="w3-left-align ">Profile</h4>
      <p className="w3-left-align ">  Luis Flores</p>
      <p className="w3-left-align ">  05/07/1975</p>
    </div>
    <br/>
  </div>
);
