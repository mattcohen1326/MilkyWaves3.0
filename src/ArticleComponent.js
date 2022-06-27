import React from "react";
import MediaQuery from 'react-responsive'
import commentBox from 'commentbox.io';
import currentArticle from './currentarticle.json'
import StartPage from "./StartPage";
import { unmountComponentAtNode, render } from "react-dom";
import { BrowserRouter as Redirect, Router, Switch, Route, Link, withRouter } from "react-router-dom";
import formatParagraph from "./formatParagraph";
import Nav from "./Nav";
import MenuButton from "./MenuButton";
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
        document.querySelector('body').style.overflowY = "scroll"
        return(
            <>
                <MediaQuery minWidth={1224}>
                <Nav />
                <div id ="ArticleComponent">
                <h1>{this.props.title}</h1>
                <h3>{this.props.date}</h3>
                {formatParagraph(this.props.body)}
                </div>
                <div className="commentbox" />
                </MediaQuery> 
                <MediaQuery maxWidth={1223}>
                <MenuButton content = {(
                                    <>
                                    <div id ="ArticleComponent">
                                    <h1>{this.props.title}</h1>
                                    <h3>{this.props.date}</h3>
                                    {formatParagraph(this.props.body)}
                                    </div>
                                    <div className="commentbox" /></>
                                        )}/>
                </MediaQuery>
            </>
        )
    }
}

export default ArticleComponent