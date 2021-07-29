import React, {Component} from 'react'

class CountTime extends Component{
    constructor(){
        super()
        this.state = {
            date : new Date() 
        }
    }
     
    change = () => {
        this.setState({date:new Date()})
    }

    componentDidMount(){
        this.timer = setInterval(()=>this.change(),1000)
    }


    componentWillUnmount() {
        clearInterval(this.timer);
      }
    

    render(){
        return( 
        <>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
        </>)
    }

}
export default CountTime