import React from 'react';
import Album from "./album.js";
import aotw from "./media/album2.jpeg";
class ScreenContent extends React.Component{
	constructor(props){
		super(props);
		this.state = {type:this.props.type};
	}
	
	render(){
		if(this.state.type == "album"){
			return(
				<Album desc = "Punk is a beautiful album.  At this stage in his career Young Thug has matured so much that he even delivered an album on the promised release date.  He came forth with a polished effort this time with Punk.  As we have come to expect at this point Thug brings in the heavy hitters for features.  He brings along Drake and Travis for a somewhat disappointing classic trap record that Im sure hit a certain fan base so you cant be made at that.  The unexpected pleasant surprise on the album for me was A$AP Rocky showing up on Livin' It Up." title = "PUNK" album = {aotw} /> 
			)
		}
	}
	
}
class TESTING extends React.Component{
  constructor(props){
	  super(props);
  }

  render(){
  return (
	<>
		<div id = "space">
		</div>
		<div id = "main-screen">
			<ScreenContent type= "album"/>
		</div>
		<div id = "cockpit">
		<div id = "dash">
		<div id = "screen-3">
		</div>
		</div>
		</div>
		<div id ="play-pause">
			<div id = "play">
			</div>
			<div id = "pause">
				<div id = "p1">
				</div>
				<div id = "p2">
				</div>
			</div>
		</div>
	</>
	
	
  );
  }
}

export default TESTING;