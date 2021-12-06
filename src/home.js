import './App.css';
import React from "react";
import StartPage from './StartPage.js';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import album from "./media/album.png";
import genres from "./media/genres.png";
import concert from "./media/concert.png";
import note from "./media/note.png";
import potw from "./media/potw.png";
function Title(props){
	return(
		<div id={props.id}>
			<h1>MILKY</h1>
			<h1>WAVES</h1>
		</div>
	);
}

class Selection extends React.Component{
	constructor(props){
		super(props);
		this.handleHover = this.handleHover.bind(this);
		this.state = {isHovered:false};
	}
	
	handleHover(){
		this.setState(prevState => ({
      isHovered: !prevState.isHovered
	  
    }));
		console.log(this.state.isHovered);
	}
	render(){
		return(
			<Link  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} to = {this.props.url}>
				<img src = {this.props.image} />
				<h1 id="button-title">{this.props.title}</h1>
				<style>{'#button-title { color:white; font-size:.5vw; width:3vw;}'}</style>
				
			</Link>
		);
	}
}
class Option extends React.Component{
	render(){
		return(
			
				<div id = {"start"}>
					<h2>Press Any Key To Continue</h2>
				</div>
			);
		}
	}
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {isClicked:false};
		this.handleClick = this.handleClick.bind(this);
	}
	
	handleClick(){
		console.log("ok")
		this.setState(prevState => ({
      isClicked: !prevState.isClicked
	  
    }));
	
	}
	//Genres, Music in Media, Live Music, Playlists, Home
	render(){
		return(
			<span autoFocus id = "homepage" tabIndex = {-1}  onKeyPress={this.handleClick}>
			  <Title id="og"/>
			  <Title id = "title"/>
			  {!this.state.isClicked ? <Option status={false}/> : null}
				  {this.state.isClicked ? <div className = "buttons">
				  <Selection title = "Genres" image={genres} url="/Playlists" />
				  <Selection title = "Music in Media" image={potw} url="/SpaceHome" />
				  <Selection title = "Live Music"image={concert} url="/Playlists" />
				  <Selection title = "Playlists" image={note} url="/Playlists" />
				  <Selection title = "AOTW"  image={album} url="/AOTW" />
			  </div>:null}
			</span>
		);
	}
		
	
  
}

export default Home;