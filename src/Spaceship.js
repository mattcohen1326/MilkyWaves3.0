import React from 'react';
import panel from './media/panel.png';
import l from './media/cp_logo.png';
import m from './media/cp_music.png';
import r from './media/cp_radar.png';
import d from './media/drums.png';
import levels from './media/cp_levels.png';
import right from './media/right.png';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
function Spaceship(){
	return(
	<>
		<div id ="panel" >
		</div>
		<div id = "controls">
			<img id="cp_logo" src={l} />
			<Link to ="/Playlists">
			<img id="cp_music" src={m} />
			</Link>
			<img id="cd_radar" src={r} />
			<Link to = "/Playlists">
			<img id="cd_drums" src={d} />
			</Link>
			<img id="cd_levels" src={levels} />
			<img id="cd_right" src={right} />
		</div>
	</>
	);
}

export default Spaceship;