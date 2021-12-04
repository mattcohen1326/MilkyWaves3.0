import React from 'react';
import Playlist from './Playlist.js';


class Album extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div className = "album-of-the-week">
				<div className = "album-description">
					<h1>{this.props.title}</h1>
					<p>{this.props.desc}</p>
					<Playlist url={this.props.url}/>
				</div>
				<div className = "album">
					<img src = {this.props.album} />
				</div>
			</div>
			
		);
	}
}

export default Album;
