import './App.css';
import './home.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import generateArticles from './generateArticles';
import Logo from './media/logo.png'
import Nav from './Nav.js'

class MenuButton extends React.Component{
	constructor(props){
		super(props)
		this.state = {clicked:false}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState(prevState => ({
			clicked: !prevState.clicked
		}))
	}
	render(){
		if(this.state.clicked){
			return(
				<>
					<div id = "MenuOptions">
						<div id = "menuButtonX"  onTouchStart={this.handleClick}></div>
						<img src = {Logo} />
						<div id = "filler"></div>
					</div>
					<Nav />
					
				</>
			)
		} else {
			const articleOutput = generateArticles()
			return (
				<>
					<div id ="MenuOptions">
					<div id = "menuButtonOpen"  onTouchStart={this.handleClick}>
                        <div className = "stripe"></div>
                        <div className = "stripe"></div>
                        <div className = "stripe"></div>    
                    </div>
					<img src = {Logo} />
					<div id = "filler"></div>
					</div>
					{this.props.content}
					
				</>
			)
		}
	}
}

export default MenuButton