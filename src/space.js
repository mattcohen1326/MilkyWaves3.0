import React from 'react';
import Spaceship from './Spaceship.js';
import Hologram from './Hologram.js';
import StartPage from './StartPage.js'
import { Navigate } from 'react-router-dom';
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
			<div className = "attempt">
			<div className="scene">
			  <div className="wrap">
				  <div className="wall wall-right"></div>
				  <div className="wall wall-left"></div>   
				  <div className="wall wall-top"></div>
				  <div className="wall wall-bottom"></div> 
				  <div className="wall wall-back"></div>    
			  </div>
			  <div className="wrap">
				  <div className="wall wall-right"></div>
				  <div className="wall wall-left"></div>   
				  <div className="wall wall-top"></div>
				  <div className="wall wall-bottom"></div>   
				  <div className="wall wall-back"></div>    
			  </div>
			</div>
			</div>
			{setTimeout(() => {
				window.history.pushState('page','page','/#/StartPage')
				}, 5500)}
			<StartPage />		
			</>
		
		);
	}
}

export default SpaceWarp;