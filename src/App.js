import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import StartPage from "./StartPage.js";
import Home from "./home.js";
import Nav from "./Nav.js";
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router';
import Playlists from "./Playlists.js";
import AOTW from "./aotw.js";
import SpaceHome from "./SpaceHome.js";
import SpaceWarp from "./space.js";
const Main = () => {
  return (
	
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
	  <Route exact path = '/Playlists' element={<Playlists />}> </Route>
	  <Route exact path = '/Nav' element={<Nav />}> </Route>
      <Route exact path = '/StartPage' element={<StartPage />}></Route>
	  <Route exact path = '/' element={<Home />}></Route>
	  <Route exact path='/Home' element={<Home />}></Route>
	  <Route exact path = "/AOTW" element = {<AOTW />}></Route>
	  <Route exact path = "/SpaceWarp" element = {<SpaceWarp />}></Route>
	  <Route exact path = "/SpaceHome" element = {<SpaceHome />}></Route>
    </Routes>
  );
}

class App extends React.Component{
  constructor(props){
	  super(props);
	  this.state = {starting:false};
  }

  render(){
  return (
	<>
		<Main />
	</>
	
	
  );
  }
}

export default App;
