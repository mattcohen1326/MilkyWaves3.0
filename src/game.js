import React, { Component } from 'react'

class Player extends React.Component{
    constructor(props) {
        super(props)
        this.yh = 68.6
        this.state = {x:35,y:68.6}
        this.jump = this.jump.bind(this);
        this.stopjump = this.stopjump.bind(this);
        this.jumplength = 0
        this.allow = true
    }
    jump(event){
        if(event.keyCode == 32 && !event.shiftKey && this.allow){
        this.allow =false
        this.interval = setInterval(() => {this.setState({y:this.yh-- });this.jumplength++}, 5)
        
        setTimeout(()=>{
            clearInterval(this.interval);
            this.interval = setInterval(() => {this.setState({y:this.yh++ });
            this.jumplength++}, 5);
            setTimeout(()=>{clearInterval(this.interval);this.allow=true},200)
        },200)
    }
        

    }
    stopjump(event){
        if(event.keyCode == 32){
        clearInterval(this.interval);
        this.interval = setInterval(() => this.setState({y:this.yh++ }), 5) 
        setTimeout(()=>{clearInterval(this.interval)},this.jumplength*5)
        this.jumplength = 0
        
        }
    }
    componentDidMount() {
        document.getElementById('player').focus()
    }

    render() {
        
        return(
            <>
                <div tabIndex="0" onKeyDown={this.jump} /*onKeyUp={this.stopjump}*/ id ="player" style={{width:'50px',height:'50px',backgroundColor:'red',zIndex:2,position:'absolute',top:String(this.state.y)+'vh',left:String(this.state.x) + 'vw'}} >

                </div>
            </>
        )
    }
}

class GameBoard extends React.Component{
    constructor(props) {
        super(props)
        this.score = 0
        this.state = {score:0}
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({score:this.score++ }), 1000)
      }
    

    render() {
        
        return(
            <>
            <div id = "board-container" style={{width:'100vw',height:'100vh',alignItems:'center',display:'flex',justifyContent:'center'}}>
            <div id = "board" stlye={{display:'flex',alignItems:'left'}}>
                <div id = "score" >Score : {this.score}</div>
                <Player />
            </div>
            </div>
            </>
        )
    }
}

export default GameBoard