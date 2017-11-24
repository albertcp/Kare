import React from 'react';

export default ({
  logged_in,
  picture,
}) => (
  <div style={{
    margin: '1em',
  }} className="w3-card w3-round w3-white">
    <div className="w3-container"> 
      <br/>
      <p className="w3-left w3-container">
	<img
	    src={picture}
	    className="w3-circle "
	    style={{
	      height:"106px",
	      width:"106px",
	    }}
	    alt="Avatar"
	/>
      </p>	 
      <h4 className="w3-left-align ">Perfil</h4>
      <p className="w3-left-align ">{logged_in}</p>
      <p className="w3-left-align ">05/07/1975</p>
    </div>
    <br/>
  </div>
);
