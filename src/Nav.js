import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import { unmountComponentAtNode, render } from "react-dom";


class NavItem extends React.Component{
	constructor(props){
		super(props);
	
		this.state = {isHovered:false};
		this.handleHover = this.handleHover.bind(this);
	}
	handleHover(){
		this.setState(prevState => ({
      isHovered: !prevState.isHovered
	  
    }));
	}
	render(){
		return(
			<Link to={this.props.navigation} style = {{color:this.state.isHovered ? "green" : "white"}}>
				<div className="nav-item">
				{this.props.name}
				</div>
			</Link>
		);
}
}

function Nav(){
	return(
		<div className = "nav">
			<NavItem name="Home" navigation="/StartPage"/>
			<NavItem name="Playlists" navigation = "/Playlists"/>
			<NavItem name="Genre" navigation = "/Genre"/>
			<NavItem name="Music In Media" navigation = "/SpaceHome"/>
			<NavItem name="Live Music" navigation = "/Playlists"/>
		
		</div>
	);
}

export default Nav;