import { toHaveFocus, toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

/*MAP
 top is 25 vh bottom is 68.6vh
 left is 34.5vw right is 65.5vw
 bottom left : (35,68) height is 400px and width is 500px
 bottom right :(535,) 
*/
class Player extends React.Component{
    constructor(props) {
        super(props)
        this.yh = 68
        this.xw = 62.5
        this.state = {x:this.xw,y:this.yh}
        this.jump = this.jump.bind(this);
        this.stopjump = this.stopjump.bind(this);
        this.jumplength = 0
        this.allow = true
    }
    jump(event){
        if(event.keyCode == 32 && !event.shiftKey && this.allow){
            this.allow = false
            this.interval = setInterval(() => {this.setState({y:this.yh-- });this.jumplength++}, 10)
        
            setTimeout(()=>{
                clearInterval(this.interval);
                this.interval = setInterval(() => {this.setState({y:this.yh++ });
                this.jumplength++}, 10);
                setTimeout(()=>{clearInterval(this.interval);this.allow=true},200)
            },200)
         }
        else if(event.keyCode == 37){
            this.xw--
            this.setState({x:this.xw})
        }
        else if(event.keyCode == 38){
            this.yh--
            this.setState({y:this.yh})
        }
        else if(event.keyCode == 39){
            this.xw++
            this.setState({x:this.xw})
        }
        if(event.keyCode == 40){
            this.yh++
            this.setState({y:this.yh})
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
                <div tabIndex="0" onKeyDown={this.jump} id ="player" style={{width:'50px',height:'50px',backgroundColor:'green',zIndex:2,position:'absolute',top:String(this.state.y)+'vh',left:String(this.state.x) + 'vw'}} >

                </div>
            </>
        )
    }
}
class Players extends React.Component{
    constructor(props){
        super(props)
        this.playerx = 34.5
        this.playery = 68.6
        this.enemyx = 40
        this.enemyy = 40
        this.jumplength = 0
        this.score = 0
        this.allow = true
        this.finalscore = 0
        this.state = {px:this.playerx,py:this.playery,ex:this.enemyx,ey:this.enemyy,score:this.score,gameover:false}
        this.jump = this.jump.bind(this);
        this.newLocation = this.newLocation.bind(this);

    }

    componentDidMount(){
        document.getElementById('player').focus()
        
        this.interval = setInterval(() => {
           
            if((Math.abs(this.enemyx - this.playerx) < 5) && (Math.abs(this.enemyy - this.playery) < 5)){
                console.log("GAME OVER - SCORE: ", this.score)
                this.setState({gameover:true})
                clearInterval(this.interval)
            }
            else{
                this.newLocation()
                this.setState({ex:this.enemyx,ey:this.enemyy,score:this.score++})
            }
    }, 1000)
    
        
    }

    componentWillUnmount(){
        if(this.interval){
            clearInterval(this.interval)
        }
    }

    newLocation(){
        let ymax = this.enemyy
        let ymin = this.enemyy
        let xmin = this.enemyx
        let xmax = this.enemyx 

        if(this.enemyy + 10 < 68.6){
            ymax = this.enemyy + 10
        }
        if(this.enemyy - 10 > 25){
            ymin = this.enemyy - 10
        }
        if(this.enemyx + 10 < 65.5){
            xmax = this.enemyx + 10
        }
        if(this.enemyx - 10 > 34.5){
            xmin = this.enemyx - 10
        }
        let ydifference = ymax - ymin;
        let xdifference = xmax - xmin;
        let rand = Math.random();
        this.enemyx = Math.floor(Math.random() * xdifference)+34.5;
        this.enemyy = Math.floor(Math.random() * ydifference)+25;
    }
    
    jump(event){
        if(event.keyCode == 32 && !event.shiftKey && this.allow){
            this.allow = false
            this.interval = setInterval(() => {this.setState({py:this.playery-- });this.jumplength++}, 10)
        
            setTimeout(()=>{
                clearInterval(this.interval);
                this.interval = setInterval(() => {this.setState({py:this.playery++ });
                this.jumplength++}, 10);
                setTimeout(()=>{clearInterval(this.interval);this.allow=true},200)
            },200)
         }
        else if(event.keyCode == 37){
            this.playerx--
            this.setState({px:this.playerx})
        }
        else if(event.keyCode == 38){
            this.playery--
            this.setState({py:this.playery})
        }
        else if(event.keyCode == 39){
            this.playerx++
            this.setState({px:this.playerx})
        }
        if(event.keyCode == 40){
            this.playery++
            this.setState({py:this.playery})
        }
    }

    render(){
        if(!this.state.gameover){
        return(
            <>
            <div tabIndex="0" onKeyDown={this.jump} id ="player" style={{width:'50px',height:'50px',backgroundColor:'green',zIndex:2,position:'absolute',top:String(this.state.py)+'vh',left:String(this.state.px) + 'vw'}} ></div>
            <div tabIndex="0"  id ="enemy" style={{width:'50px',height:'50px',backgroundColor:'red',zIndex:2,position:'absolute',top:String(this.state.ey)+'vh',left:String(this.state.ex) + 'vw'}} ></div>
            </>
        )
        }
        else{
            return(
                <>
                    <div id = "final-score" style={{fontSize:"3vw",color:'black'}}>{this.state.score}</div>
                </>
            )
        }
    }
}
class Enemy extends React.Component{
    constructor(props){
        super(props)
        this.yh = 35
        this.xw = 60
        this.state = {x:this.xw,y:this.yh}
        this.newLocation = this.newLocation.bind(this);
    }

    newLocation(){
        let ydifference = 68.6-25;
        let xdifference = 65.5-34.5;
        let rand = Math.random();
        this.xw = Math.floor(Math.random() * xdifference)+34.5;
        this.yh = Math.floor(Math.random() * ydifference)+25;
        console.log(this.xw)
    }

    render() {
        return(
            <>
                <div tabIndex="0" id ="enemy" style={{width:'50px',height:'50px',backgroundColor:'red',zIndex:2,position:'absolute',top:String(this.state.y)+'vh',left:String(this.state.x) + 'vw'}} >

                </div>
            </>
        )
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.newLocation()
            this.setState({x:this.xw,y:this.yh})
    }, 1000)
    }

}
class GameBoard extends React.Component{
    constructor(props) {
        super(props)
        this.score = 0
        this.state = {score:0}
        this.enemy = props.enemy
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
                <Players />
            </div>
            </div>
            </>
        )
    }
}

function Game() {
    return(
        <>
         <GameBoard player={<Player />} enemy ={<Enemy />} />
        </>
    )
}

export default Game