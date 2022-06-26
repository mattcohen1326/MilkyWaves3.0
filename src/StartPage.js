import './App.css';
import './home.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter, Navigate } from "react-router-dom";
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
import generateArticles from './generateArticles';
import Nav from "./Nav.js"
import MediaQuery from 'react-responsive'
import MenuButton from './MenuButton.js'
import AOTW  from './aotw';
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
					<div className = "Article"></div>
				</div>
				<div id = "HomeAOTW">
					<AOTW homepage={true}/>
				</div>
			</div>
		</MediaQuery>
		<MediaQuery maxWidth={1223}>
			<MenuButton content={(
				<div id = "Articles">
					{generateArticles()}
				</div>	
				)} />
		</MediaQuery>
		</>
	);
	
}


export default StartPage 