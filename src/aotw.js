import './App.css';
import React from "react";
import Nav from "./Nav.js";
import StartPage from './StartPage.js';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";
import album from "./media/album2.jpeg";
import Album from "./album.js";
import MenuButton from './MenuButton';
import MediaQuery from 'react-responsive'
import commentBox from 'commentbox.io';

class AOTW extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount() {

        this.removeCommentBox = commentBox('5668220384051200-proj', {
			backgroundColor: '#000',
			textColor: '#fff'
		})
	}	
    componentWillUnmount() {

        this.removeCommentBox();
    }
	render(){
		return(
		<>
				<Album homepage={this.props.homepage} desc= "Thugs Back at it again with another masterpiece.  This one is a vibe and features a few new looks for Thug as well as a return to a few classic sounds.  My personal favorites are Stressed, Stupid, and Peepin Out The Window" title= "Punk" album= {album} url = {"https://embed.music.apple.com/us/album/punk/1590479961"} />
				<div className="commentbox" />
		</>
		);

	}
}
	

export default AOTW;