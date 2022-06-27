import './App.css';
import './home.css';
import React from "react";
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Routes, Redirect, Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import articleImages from "./articles/articleGenerator.js"
import handleArticle from './articleHandler';
import ArticleComponent from './ArticleComponent';
import articles from './articles/articles.json'
var colorCount = 0
var colors = ["rgb(12, 156, 238, .3)","rgb(61,189,194, .3)","rgb(89, 31, 206,.3)","rgb(112, 128, 144,.3)"];


class Article extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		const article = {
			"title":this.props.title,
			"img":this.props.img,
			"body":this.props.body
		}
		if(colorCount == 4){
			colorCount = 0
		}
		var color = colors[colorCount]
		colorCount++
		
		const mystyle = {
			backgroundColor:color
		}
		console.log(this.props.route)
		return(
			<Link to ={this.props.route} style={mystyle} className='Article'>
				<h1>{this.props.title}</h1>
				<img src ={this.props.img}/>
			</Link>

		);
	} 
}

function generateArticles(){
	var finalArticles =  []
	for(var i = 0; i < articles.articles.length; i++){
		console.log(articles.articles[i].route)
		var newArticle = <Article title={articles.articles[i].title} img={articleImages[i]} body={articles.articles[i].body} route={articles.articles[i].route} date={articles.articles[i].date}/>
		finalArticles.push(newArticle)
	}
	
	var newArticle =<Article route={'/StartPage'} />
	finalArticles.push(newArticle)
	return finalArticles
}

export default generateArticles