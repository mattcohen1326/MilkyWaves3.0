import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import Spaceship from "./Spaceship.js";
function SpaceHome(){
	return(
	<>
		<div id = "spacehome">
		
		</div>
		<Link id = "spacelink" to="/SpaceWarp">
				<div className="travel">
				</div>
			</Link>
		<Spaceship />
		</>
	);
}

export default SpaceHome;