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
import Rules from "./Rules.js"
import SpaceHome from "./SpaceHome.js";
import SpaceWarp from "./space.js";
import ArticleComponent from './ArticleComponent';
import articles from './articles/articles.json'
import articleImages from './articles/articleGenerator';

function createArticleRoutes(){
	var aroutes = []
	const art = articles.articles
	for(var i = 0; i < art.length; i++){
		let article = art[i]
		aroutes.push(<Route exact path = {article.route} element = {<ArticleComponent title={article.title} body={article.body} img={articleImages[i]} date={article.date} />} />)
	}
	return aroutes	
}

const Main = () => {
  return (
	
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
	  <Route exact path = '/Playlists' element={<Playlists />}> </Route>
	  <Route exact path = '/Nav' element={<Nav />}> </Route>
      <Route exact path = '/StartPage' element={<StartPage />}></Route>
	  <Route exact path = '/' element={<Home />}></Route>
	  <Route exact path='/Home' element={<Home />}></Route>
	  <Route exact path = "/AOTW" element = {<AOTW homepage={false}/>}></Route>
	  <Route exact path = "/SpaceWarp" element = {<SpaceWarp />}></Route>
	  <Route exact path = "/SpaceHome" element = {<SpaceHome />}></Route>
	  <Route exact path = "/GRTG" element = {<Rules />}></Route>
	  {createArticleRoutes()}
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
