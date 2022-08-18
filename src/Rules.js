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
        return(
            <>
                <div className="ruleEntry">
                    <h1 className = "rule-number">{this.props.number}:</h1><h1 onMouseOver={this.handleHover} onMouseOut={this.state.handleUnhover} className = "rule-body">{this.props.body}</h1>
                </div>
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
                <h1>GRAHAM'S GUIDE TO THE GALAXY</h1>
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