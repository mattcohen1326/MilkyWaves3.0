import React from 'react';
import Spaceship from './Spaceship.js';
class SpaceWarp extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<>
			<div class = "attempt">
			<div class="scene">
			  <div class="wrap">
				  <div class="wall wall-right"></div>
				  <div class="wall wall-left"></div>   
				  <div class="wall wall-top"></div>
				  <div class="wall wall-bottom"></div> 
				  <div class="wall wall-back"></div>    
			  </div>
			  <div class="wrap">
				  <div class="wall wall-right"></div>
				  <div class="wall wall-left"></div>   
				  <div class="wall wall-top"></div>
				  <div class="wall wall-bottom"></div>   
				  <div class="wall wall-back"></div>    
			  </div>
			</div>
			</div>
			<Spaceship />
		</>
		);
	}
}

export default SpaceWarp;