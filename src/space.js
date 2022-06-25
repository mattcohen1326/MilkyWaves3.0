import React from 'react';
import Spaceship from './Spaceship.js';
import Hologram from './Hologram.js';
import StartPage from './StartPage.js'
class Desc extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
	return(
		<div id ="space-content">
				<h1>{this.props.title}</h1>
				<p>{this.props.message}</p>
		</div>
	);
	}
}
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
			
			<StartPage />
		</>
		
		);
	}
}

export default SpaceWarp;