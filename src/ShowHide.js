import React,{Component} from 'react'

class ShowHide extends Component{
    constructor(){
        super()
        this.state = {display:false}
        }
      
      
        showhide = () => {
          this.setState({display:!this.state.display})
        }
      
      
        render(){
          return (
            <>  
            {this.state.display && <h1>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</h1>}
            <button onClick={this.showhide}>-- X --</button>
            </>)
          
        }
      }

export default ShowHide