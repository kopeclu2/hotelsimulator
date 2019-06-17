import React, { Component } from 'react';
import {Modal} from './modals/Modal';
import VybaveniPokoje from './modals/VybaveniPokojeModal';
import PracovniciRecepce from './modals/PracovniciRecepce';
import PracovniciUkliduPokoju from './modals/PracovniciUkliduPokoju';


class configureButtons extends Component {
    state={
        showModal:false,
        index:null,
        buttons:[
            {title: 'Kvalita vybavení pokoje'},
            {title: 'Pracovníci recepce'},
            {title: 'Pracovníci úklidu pokojů'},
            {title: 'Pracovníci FaB úseku'}            
        ]
    }

    showModal = () =>{  
        if(this.state.showModal){
            const index = this.state.index 
            switch(index){
                    case 0:
                            return <VybaveniPokoje 
                            hideModals={this.hideModal} />
                    case 1:
                        return <PracovniciRecepce 
                            hideModals={this.hideModal}        
                            />
                    case 2:
                        return <PracovniciUkliduPokoju
                            hideModals={this.hideModal}
                            />
                }   
        }
         
                
    }
    
   
    hideModal =() =>{
        if(this.state.showModal){
            this.setState({showModal:false})
        }
    }
    hadnleButtonClick(index){
        this.setState({showModal:true,index:index})
        this.showModal(index)
       
    }
    renderButtons(){
        return this.state.buttons.map((button,index)=>{
            return <div key={index} className="column">
            <button key={index} name={index} className="ui blue button" onClick={()=>this.hadnleButtonClick(index)}>                
                {button.title}
              </button>
            </div>
        })
    }
    render(){
        return(
        <div >
           {this.showModal()}
        <div className="ui four column grid container">
          <div className="row">
            {this.renderButtons()}
          </div>
        </div>
        </div>
        );
    }
}
export default configureButtons;
