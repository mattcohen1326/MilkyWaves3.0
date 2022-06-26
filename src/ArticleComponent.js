import React from "react";
import MediaQuery from 'react-responsive'
import commentBox from 'commentbox.io';
import currentArticle from './currentarticle.json'
import StartPage from "./StartPage";
import { unmountComponentAtNode, render } from "react-dom";
import { BrowserRouter as Redirect, Router, Switch, Route, Link, withRouter } from "react-router-dom";
class ArticleComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        this.removeCommentBox = commentBox('5668220384051200-proj', {
			backgroundColor: '#000',
			textColor: '#fff'
		})
	}	
    componentWillUnmount() {
        this.removeCommentBox();
    }
    render(){
        console.log(this.props.artilce)
        return(
            <>
                <Link to ='/StartPage'><div id = "backbutton"></div></Link>
                <div id ="ArticleComponent">
                <h1>{this.props.title}</h1>
                <img src ={this.props.img} />
                <p>{this.props.body}</p>
                </div>
                <div className="commentbox" />
            </>
        )
    }
}

export default ArticleComponent