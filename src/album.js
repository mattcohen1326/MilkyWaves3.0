import React from 'react';
import Playlist from './Playlist.js';
import Nav from './Nav.js';
import MediaQuery from 'react-responsive';
import MenuButton from './MenuButton.js';

class Album extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		if(this.props.homepage == false){
		return(
			<>
			<MediaQuery minWidth={1224}>
			<Nav />
			<div className = "album-of-the-week">
				<div className = "album-description">
					<h1>AOTW: {this.props.title}</h1>
					<p>{this.props.desc}</p>
					<Playlist url={this.props.url}/>
				</div>
				<div className = "album">
					<img src = {this.props.album} />
				</div>
			</div>
			</MediaQuery>
			<MediaQuery maxWidth={1223}>
				<MenuButton content = {(
					<div className = "album-of-the-week">
					<div className = "album-description">
						<h1>AOTW: {this.props.title}</h1>
						<p>{this.props.desc}</p>
						<Playlist url={this.props.url}/>
					</div>
					<div className = "album">
						<img src = {this.props.album} />
					</div>
				</div>
				)} />
				
				
			</MediaQuery>

			</>
			
		)
		} else{
			return(
				<div className = "album-of-the-week-homepage">
					<div className = "album-description-homepage">
						<h1>AOTW: {this.props.title}</h1>
						<Playlist url={this.props.url}/>
					</div>
					<div className = "album-homepage">
						<img src = {this.props.album} />
					</div>
				</div>
				
			)
		} 
	}
}

export default Album;
