import React from 'react';
import {Modal} from './Modal';

class VybaveniPokoje extends React.Component{
    showtitle(){
        return 'Kvalita vybavení pokoje';
    }
    showContent(){
        return<div class="ui two column grid">
            <div className="row">
                <div className="column right aligned">Investice do vybavení hotelu v % z tržeb: </div>
                <div className="column"><select>
                    <option value="grapefruit">1%</option>
                    <option value="lime">2%</option>
                    <option value="coconut">3%</option>
                    <option value="mango">4%</option>
                </select></div>
            </div>
            <div className="row">
                <div className="column right aligned ">Úroveň vybevní hotelu: </div>
                <div className="column"> <select>
                    <option value="grapefruit">1%</option>
                    <option value="lime">2%</option>
                    <option value="coconut">3%</option>
                    <option value="mango">4%</option>
                </select> </div>
            </div>           
            </div>
    }
    render(){
        return <Modal 
        hideModals={this.props.hideModals}
        content={this.showContent()}
        title={this.showtitle()}    
        />
    }
    
}
export default VybaveniPokoje;

