import React from 'react';
import skim from './media/skim.png';
class Skim extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<>
				<div id = "skim">
				<img id = "skim-pic" src={skim} />
				<div className = "speech-bubble">
					{this.props.message};
				</div>
				</div>
			</>
		);
	}
	
}

export default Skim;