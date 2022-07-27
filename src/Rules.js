import React from "react";
import * as ReactDOM from 'react-dom';
import articles from './articles/articles.json'
import generateArticles from "./generateArticles";
import MediaQuery from "react-responsive";
import MenuButton from "./MenuButton";
import Nav from "./Nav";

class Rule extends React.Component{
    constructor(props){
        super(props)
        this.state = {hovered:false}
        this.handleHover = this.handleHover.bind(this)
    }
    handleHover(){
        this.setState({hovered:true})
    }
    handleUnhover(){
        this.setState({hovered:false})
    }
    render(){
        
        const myStyle = {}
        if(this.state.hovered){
            const myStyle = {animationName:"fadein",
            animationFillMode:"forwards",
            animationDuration:"2s",
            animationDelay:"1s",
            opacity:"1"}
            console.log("ok")
        }
        else{
            const myStyle = {animationName:"bodyfade",
            animationFillMode:"forwards",
            animationDuration:"4s",
            animationTimingFunction:"linear"}
        }
        return(
            <>
                <h1 onMouseOver={this.handleHover} style={myStyle} onMouseOut={this.state.handleUnhover} id = "ruleEntry">RULE #{this.props.number}: {this.props.body}</h1>
            </>
        )
        }
        
    }


function loadRules(){
    var rules = []
    var articleArray = articles.articles
    for(var i = 0; i < articleArray.length; i++){
        var current = articleArray[i]
        if(current.type === "rule"){
            rules.push(<Rule number={current.number} body={current.body}/>)
        }
    }
    return rules
}


class Rules extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <MediaQuery minWidth={1224} >
                <Nav />
                <div id = "RulesPage">
                <h1>GRAHAM'S RULES TO THE GALAXY</h1>
                {loadRules()}
                </div>
                </MediaQuery> 
                <MediaQuery maxWidth={1223} >
                <MenuButton content={(
                    <>
                    <div id = "RulesPage">
                    <h1>GRAHAM'S RULES TO THE GALAXY</h1>
                    {loadRules()}
                    </div>
                    </>
                )} />
                
                </MediaQuery> 
            </>
        )
    }
}

export default Rules