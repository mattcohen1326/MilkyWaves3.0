
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
			<div style={mystyle}className="playlist-category">
				<div className = "blurb">
					<h1 style={{fontSize:this.props.size}}>{this.props.name.toUpperCase()}</h1>
					<p>{this.props.desc}</p>
				</div>
			<Playlist url={this.props.url}/>
			</div>
		);
	}
	
	
}

export default PlaylistCategory;