import React from 'react'

class Hologram extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<>
				<div id = "hologram">
				
				<div class="card"></div>
				<div class="holo"></div>
				</ div>
			</>
		);
	}
}

export default Hologram;