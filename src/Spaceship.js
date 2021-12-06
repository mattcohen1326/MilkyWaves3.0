import React from 'react';
import panel from './media/panel.png';
import l from './media/cp_logo.png';
import m from './media/cp_music.png';
import r from './media/cp_radar.png';
import d from './media/drums.png';
import levels from './media/cp_levels.png';
import right from './media/right.png';
function Spaceship(){
	return(
	<>
		<div id ="panel" >
		</div>
		<div id = "controls">
			<img id="cp_logo" src={l} />
			<img id="cp_music" src={m} />
			<img id="cd_radar" src={r} />
			<img id="cd_drums" src={d} />
			<img id="cd_levels" src={levels} />
			<img id="cd_right" src={right} />
		</div>
	</>
	);
}

export default Spaceship;