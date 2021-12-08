import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import Nav from './Nav.js'
import Iframe from 'react-iframe';
import raw from './playlists/playlists.js';
import Skim from './Skim.js';
import logo from './media/logo.png';
import spot from './playlists/spotify.js';
import spotlogo from './media/spotify.png';
import applelogo from './media/apple.png';
var COLOR = 0;
var colors = ["rgb(12, 156, 238, .3)","rgb(61,189,194, .3)","rgb(89, 31, 206,.3)","rgb(112, 128, 144,.3)"];
var ptype = "apple";


function pickNextColor(){
	var temp = "";
	if(COLOR == colors.length){
		COLOR = 0;
	}
	
	temp = colors[COLOR];
	COLOR++;
	return temp;
	
}


class Arrow extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
		<div class="things">
		  <div class="content">
				<div id = {this.props.id} class="arrow">
				  <div class="curve"></div>
				  <div class="point"></div>
				</div>
			</div> 
		 </div>
		 );
	}
}

class Playlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {mood:this.props.mood,weather:this.props.weather,activity:this.props.activity};
		
	}
	
	render(){
		return(
		<Iframe id = "playlist"
				className ="playlist"
				allow = "autoplay *"
				src={this.props.url}
		/>);
	}

}

class PlaylistCategory extends React.Component{
	constructor(props){
		super(props);
	}
	

	
	
	render(){
		const mystyle = {
		  backgroundColor: this.props.color,
		  fontSize:this.props.size
		};
		return(
			<div id={this.props.id} style={mystyle}className="playlist-category">
				<div className = "blurb">
					<h1 style={{fontSize:this.props.size}}>{this.props.name.toUpperCase()}</h1>
					<p>{this.props.desc}</p>
				</div>
			<Playlist ranks={[1,2,3,4]} url={this.props.url}/>
			</div>
		);
	}
	
	
}
function calculateFontSize(title){
	var l = 3;
	return String(l)+"vw";
}

function playlistHelper(songs){
	var url2="";
	var title="";
	var playlists = [];
	var url_set = true;
	var allthree = false;
	var title_set = false;
	var score1_set = false;
	var score2_set = false;
	var score3_set = false;
	var score1 = "";
	var score2 = "";
	var score3 = "";
	for(var i = 0; i < songs.length; i++){
		if(songs.charAt(i) == '\r' || songs.charAt(i) == '\n' || songs == "undefined"){
				continue;
		}
		else if(songs.charAt(i) === ','){
			if(url_set){
				url_set = !url_set;
				title_set = true;
			}
			else if(title_set){
				title_set = false;
				score1_set = true;
			}
			else if(score1_set){
				score1_set = false;
				score2_set = true;
			}
			else if(score2_set){
				score2_set = false;
				score3_set = true;
			}
			else if(score3_set){
				score3_set = false;
				playlists.push(<PlaylistCategory mood = {parseInt(score1)} weather = {parseInt(score2)} activity = {parseInt(score3)} color={pickNextColor()} size={calculateFontSize(title)} url={url2} name={title} desc="" />);
				url2 = "";
				title = "";
				score1 = "";
				score2 = "";
				score3 = "";
				score3_set = false;
				url_set = true;
			}
		}
		else if(url_set){
			url2 += songs.charAt(i);
		}
		else if(title_set){
			title += songs.charAt(i);
		}
		else if(score1_set){
			score1 += songs.charAt(i);
		}
		else if(score2_set){
			score2 += songs.charAt(i);
		}
		else if(score3_set){
			score3 += songs.charAt(i);
		}
		
	}
	return playlists;
	
}
function createPlaylists(){
	fetch(raw)
  .then(response => response.text())
  .then(data => {
	  const songs = data;
	  return playlistHelper(songs);
  });
}
class AppleSpotify extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<img id={this.props.id} src={this.props.logo} onClick={this.props.click} />
		);
	}
}


class Choices extends React.Component{
	constructor(props){
		super(props);
		this.state = {mood:"angry",
					weather:"rainy",
					activity:"chilling",
					ptype:"apple"};
		this.handleChange = this.handleChange.bind(this);
		this.choosePlaylist = this.choosePlaylist.bind(this);
		this.convertMood = this.convertMood.bind(this);
		this.convertWeather = this.convertWeather.bind(this);
		this.convertActivity = this.convertActivity.bind(this);
		this.distance = this.distance.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		this.setState({chosen:!this.state.chosen});
		this.setState({ptype:(ptype == "apple") ? "spot" : "apple"});
	}
	handleChange(e) {
		if(e.target.id === "moods"){
			this.setState({ mood: e.target.value });
		}
		else if(e.target.id === "weathers"){
			this.setState({ weather: e.target.value });
		}
		else if(e.target.id === "activities"){
			this.setState({ activity: e.target.value });
		}
		
	}
	distance(pList){
		var d = 0;
		console.log(this.convertActivity() + " " + this.convertMood() + " "  + this.convertWeather());
		d += Math.abs(this.convertMood() - pList.props.mood);
		d += Math.abs(this.convertWeather() - pList.props.weather);
		d += Math.abs(this.convertActivity() - pList.props.activity);
		return d;
	}
	convertWeather(e){
		var m = this.state.weather;
		if(m == "rainy"){
			return 1;
		}
		else if(m == "snow"){
			return 3;
		}
		else if(m == "cold"){
			return 5;
		}
		else if(m == "spring"){
			return 7;
		}
		else if(m == "summer"){
			return 10;
		}
	}
	convertActivity(e){
		var m = this.state.activity;
		if(m == "chilling"){
			return 1;
		}
		else if(m == "study"){
			return 5;
		}
		else if(m == "workout"){
			return 10;
		}
		
	}
	convertMood(e){
		
		var m = this.state.mood;
		
		if(m == "angry"){
			return 1;
		}
		else if(m == "sad"){
			return 3;
		}
		else if(m == "indifferent"){
			return 5;
		}
		else if(m == "vibes"){
			return 7;
		}
		else if(m == "happy"){
			return 10;
		}
	}
	choosePlaylist(e){
		var hash = new Object();
		var pLists = [];
		if(this.state.ptype == "apple"){
			pLists = playlistHelper(raw);
		}
		else{
			pLists = playlistHelper(spot);
		}
		for(var i = 0; i < pLists.length; i++){
			hash[pLists[i].props.name] = this.distance(pLists[i]);
		}
		var min = 100;
		var pname = "";
		for(var key in hash){
			if (hash[key] < min){
				min = hash[key];
				pname = key;
			}
		}
		
			console.log(pLists);
		for(var i = 0; i < pLists.length;i++){
			if(pLists[i].props.name == pname){
				console.log(pLists[i].props);
				return i;
				//<>
				//<h2 id="rec">RECOMMENDED PLAYLIST :</h2>
				//<PlaylistCategory id="chosen" name = {pLists[i].props.name} mood={pLists[i].props.mood} weather={pLists[i].props.weather} activity={pLists[i].props.activity} color={pLists[i].props.color} size={pLists[i].props.size} url={pLists[i].props.url} desc ="" />
				//</>
				//);
				//return pLists[i];
			}
		}
	}
	render(){
		if(!this.state.chosen){
		return(
		<>
		<div id = "playlist-choices">
			<h1>Playlist Picker</h1>
		<div id = "alignment">
		<div id = "non-arrow">
			<div id = "mood" className = "selector">
			<h1>Mood</h1>
			<select value = {this.state.mood} name="mood-choices" id="moods" onChange={this.handleChange}>
			  <option value="angry">Angry</option>
			  <option value="sad">Sad</option>
			  <option value="indifferent">Indifferent</option>
			  <option value="vibes">Vibes</option>
			  <option value="happy">Happy</option>
			</select>
			</div>
			<div id = "weather" className = "selector">
			<h1>Weather</h1>
			<select value = {this.state.weather} onChange ={this.handleChange} name="mood-choices" id="weathers">
			  <option value="rainy">Rainy</option>
			  <option value="snow">Snow</option>
			  <option value="cold">Winter</option>
			  <option value="spring">Spring</option>
			  <option value="summer">Summer</option>
			</select>
			</div>
			<div id = "activity" className = "selector">
			<h1>Activity</h1>
			<select value = {this.state.activity} onChange = {this.handleChange} name="mood-choices" id="activities">
			  <option value="chilling">Chilling</option>
			  <option value="study">Study</option>
			  <option value="workout">Workout</option>
			</select>
			</div>
			</div>
			
			<div id = "not-choosing">
				<Logo logo={logo} click={this.handleClick} />
			</div>
			</div>
			
			
			
		</div>
		<List />
		</>
		);
		}
		else{
			return(
			<>
			<div id = "playlist-choices">
			<h1>Playlist Picker</h1>
		<div id = "alignment">
		<div id = "non-arrow">
			<div id = "mood" className = "selector">
			<h1>Mood</h1>
			<select value = {this.state.mood} name="mood-choices" id="moods" onChange={this.handleChange}>
			  <option value="angry">Angry</option>
			  <option value="sad">Sad</option>
			  <option value="indifferent">Indifferent</option>
			  <option value="vibes">Vibes</option>
			  <option value="happy">Happy</option>
			</select>
			</div>
			<div id = "weather" className = "selector">
			<h1>Weather</h1>
			<select value = {this.state.weather} onChange ={this.handleChange} name="mood-choices" id="weathers">
			  <option value="rainy">Rainy</option>
			  <option value="snow">Snow</option>
			  <option value="cold">Winter</option>
			  <option value="spring">Spring</option>
			  <option value="summer">Summer</option>
			</select>
			</div>
			<div id = "activity" className = "selector">
			<h1>Activity</h1>
			<select value = {this.state.activity} onChange = {this.handleChange} name="mood-choices" id="activities">
			  <option value="chilling">Chilling</option>
			  <option value="study">Study</option>
			  <option value="workout">Workout</option>
			</select>
			</div>
			</div>
			<div id = "choosing">
				<Logo logo={logo} click={this.handleClick} />
			</div>
			
			</div>
			
			
			
		</div>
				<List choice={this.choosePlaylist()} />
				
			</>
			);
		}
	}
}


class Logo extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<img id={this.props.id} src={this.props.logo} onClick={this.props.click} />
		);
	}
}
class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {type:"apple"};
		this.handleApple = this.handleApple.bind(this);
		this.handleSpot = this.handleSpot.bind(this);
	}
	
	handleApple(){
		this.setState({type:"apple"});
		COLOR=0;
		ptype = "apple";
	}
	
	handleSpot(){
		console.log("fuq");
		this.setState({type:"spot"});
		COLOR=0;
		ptype = "spot";
	}
	render(){
		if(this.state.type == "apple"){
			var final_playlists = playlistHelper(raw);
		}
		else{
			var final_playlists = playlistHelper(spot);
		}
		var title = (
			<h1 id="pStart">Browse All Playlists:</h1>
		);
		final_playlists.unshift(title);
		if(this.props.choice != null){
			//<PlaylistCategory id="chosen" name = {pLists[i].props.name} mood={pLists[i].props.mood} weather={pLists[i].props.weather} activity={pLists[i].props.activity} color={pLists[i].props.color} size={pLists[i].props.size} url={pLists[i].props.url} desc ="" />
				
			var c = (
				<>
				<h2 id="rec">RECOMMENDED PLAYLIST :</h2>
				<PlaylistCategory id="chosen" name = {final_playlists[this.props.choice].props.name} mood={final_playlists[this.props.choice].props.mood} weather={final_playlists[this.props.choice].props.weather} activity={final_playlists[this.props.choice].props.activity} color={final_playlists[this.props.choice].props.color} size={final_playlists[this.props.choice].props.size} url={final_playlists[this.props.choice].props.url} desc ="" />
				</>
				);
					
			
			
			final_playlists.unshift(c);
		}
		return(
			<>
			<div id = "apple-spotify">
				<AppleSpotify logo ={applelogo} click={this.handleApple} />
				<AppleSpotify logo ={spotlogo} click={this.handleSpot} />
			</div>
			{final_playlists}
			</>
			
		);
	}
}

function Playlists(){
	return(
	<>
		<Nav />
		<Choices ptype = "apple"/>
		
		
		<Skim message=" THE WHEEL TO GET A SUGGESTED PLAYLIST.  WHILE THE WHEEL IS SPINNING YOUR RECOMMENDATION WILL APPEAR BELOW"/>
	</>
	);
}

export default Playlists;