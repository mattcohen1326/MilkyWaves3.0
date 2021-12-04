import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import Nav from './Nav.js'





class Article extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<>
			<div class = "article">
			<h1>{this.props.title.toUpperCase()}</h1>
			<p>{this.props.desc}</p>
			</div>
			
			</>
		);
	}

}


function Articles(){
	return(
	<>
		<Nav />
		<Article title = "Test" desc = "Hello World" />
		<style>{'body { background: linear-gradient(45deg, #9c27b0, #4caf50); }'}</style>
	</>	
	);
}

export default Articles;