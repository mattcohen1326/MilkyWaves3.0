import './App.css';
import './home.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import articleImages from "./articles/articleGenerator.js"

var colorCount = 0
var colors = ["rgb(12, 156, 238, .3)","rgb(61,189,194, .3)","rgb(89, 31, 206,.3)","rgb(112, 128, 144,.3)"];


class Article extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		
		if(colorCount == 4){
			colorCount = 0
		}
		var color = colors[colorCount]
		colorCount++
		
		const mystyle = {
			backgroundColor:color
		}

		return(
			<div style={mystyle} className = "Article">
				<h1>{this.props.title}</h1>
				<img src ={this.props.img}/>
			</div>

		);
	} 
}

function generateArticles(){
	const articles = require("./articles/articles.json")
	var finalArticles =  []
	console.log(articleImages)
	for(var i = 0; i < articles.articles.length; i++){
		var newArticle = <Article title={articles.articles[i].title} img={articleImages[i]} />
		finalArticles.push(newArticle)
	}
	
	return finalArticles
}

export default generateArticles