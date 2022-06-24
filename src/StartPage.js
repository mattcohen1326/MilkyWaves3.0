import './App.css';
import './home.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import album from "./media/album.png";
import genres from "./media/genres.png";
import concert from "./media/concert.png";
import note from "./media/note.png";
import potw from "./media/potw.png";
import Logo from "./media/logo.png"
import {TwitterTimelineEmbed} from 'react-twitter-embed';
import articleImages from "./articles/articleGenerator.js"
import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import Nav from "./Nav.js"
import MediaQuery from 'react-responsive'

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
					</div>
					<Nav />
				</>
			)
		} else {
			const articleOutput = generateArticles()
			return (
				<>
					<div id ="MenuOptions">
					<div id = "menuButtonOpen"  onTouchStart={this.handleClick}></div>
					<img src = {Logo} />
					</div>
					
					<div id = "Articles">
						{articleOutput}
					</div>
				</>
			)
		}
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
function StartPage() {
	const articleOutput = generateArticles()
	document.querySelector('body').style.overflowY = 'hidden'
	return(
		<>
		<MediaQuery minWidth={1224}>
		    <Nav />
			<div id = "HomeBody">
				<div id = "Timeline">
					<TwitterTimelineEmbed
					sourceType="profile"
					screenName="milkywavesmusic"
					options={{height: 400}}
					/>
				</div>
				<div id = "Articles">
					{articleOutput}
				</div>
				<div id = "Timeline">
					<TwitterTimelineEmbed
					sourceType="profile"
					screenName="milkywavesmusic"
					options={{height: 400}}
					/>
				</div>
			</div>
		</MediaQuery>
		<MediaQuery maxWidth={1223}>
			<MenuButton/>
		</MediaQuery>
		</>
	);
	
}


export default StartPage 