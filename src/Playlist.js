import React from 'react';
import Iframe from 'react-iframe';

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

export default Playlist;