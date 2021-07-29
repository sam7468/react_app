import React, {Component} from 'react'
import Count from './timer'

class Reverse_count extends Component{
    constructor(){
        super()
        this.state = {
            min : 30,
            sec : 60,
            over:false 
        }
    }
     
    change = () => {
        this.setState({sec : this.state.sec-1})
        if(this.state.sec == 0){
            this.setState({
                sec:60,
                min:this.state.min-1
            })
        if(this.state.min == 0){
            this.stoptimer()
        }    
        }
    }

    stoptimer = () =>{
        clearInterval(this.reverse)
        this.setState({over:true})
    }

    componentDidMount(){
        this.reverse = setInterval(()=>this.change(), 1000)
    }


   
    render(){
        const {sec,min,over} = this.state
        return( 
        <>
            <button style={{color: 'white'},{fontSize:"200px"}} >{min}</button> <span style={{fontSize:"200px"}}>:</span> <button style={{color: 'white'},{fontSize:"200px"}} >{sec}</button>
            {over && <h1> T I M E   O V E R   :(</h1>}
        </>)
    }

}
export default Reverse_count