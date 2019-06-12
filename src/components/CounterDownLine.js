import React, { Component } from 'react'



export default class CounterDownLine extends Component {
    constructor(props){
        super(props);
        this.state={
            timeout:false
        }
       
    }
    
    render() {       
        return (
            <div>
               <div onLoad={this.move(this.props)} id="myProgress">
                <div id="myBar"></div>
                </div>
               
            </div>
        )
    }
   
     move(props) { 
       if(!this.state.timeout) {
        var width = 1;
        var id = setInterval(frame, 1000);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            props.onTimeOut();
        
          } else {
            width+=10; 
            document.getElementById("myBar").style.width = width + '%';

          }
        }
       }  
        }
        
}
