import React from 'react'
import {Link} from "react-router-dom";
import Nav from './Nav.js';
import { unmountComponentAtNode, render } from "react-dom";



class StartOption extends React.Component{
	constructor(props){
		super(props);
		this.state = {isHovered:false};
		this.handleHover = this.handleHover.bind(this);
		
	}
	
	handleHover(){
		console.log(this.state.isHovered);
		this.setState(prevState => ({
      isHovered: !prevState.isHovered
	  
    }));
	}
	render(){
	return(
		<Link to = {this.props.navigation}>
		<div onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} className="item" id={this.props.id} style={{backgroundColor: this.props.color}}>
			{!this.state.isHovered ? <img src={this.props.url} /> : null}
				{this.state.isHovered ? <h1 id="choice-header">{this.props.id}</h1> : null}
		</div>
		</Link>
	);
	}
}


function StartPage(){
	return(
	<>
		<Nav />
		<div className="main-container">
			<StartOption navigation = "/AOTW"id="aotw" url="/media/aotw.png" color="pink" />
			<StartOption navigation = "/Home" id="sotw" url="/media/sotw.png" color="purple"/>
			<StartOption navigation = "/Home" id="qotw" url="/media/qotw.png" color = "green"/>
			<StartOption navigation = "/Home" id="potw" url="/media/potw.png" color = "hotpink"/>
		</div>
	</>
	);
}

export default StartPage;