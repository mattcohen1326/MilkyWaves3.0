import './App.css';
import React from "react";
import Nav from "./Nav.js";
import StartPage from './StartPage.js';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import album from "./media/album2.jpeg";
import Album from "./album.js";

function AOTW(){
		return(
		<>
			<Nav />
			<Album desc= "Thugs Back at it again with another masterpiece.  This one is a vibe and features a few new looks for Thug as well as a return to a few classic sounds.  My personal favorites are Stressed, Stupid, and Peepin Out The Window" title= "Punk" album= {album} url = {"https://embed.music.apple.com/us/album/punk/1590479961"} />
		</>
		);
}
	

export default AOTW;