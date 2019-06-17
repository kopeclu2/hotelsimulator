import React from 'react';
import {Modal} from './Modal';

class PracovniciRecepce extends React.Component{
    showtitle(){
        return 'Pracovnici recepce';
    }
    showContent(){
        return<div class="ui three column grid"style={{width:'50%'}} >
            <div className="row" >
                <div className="column ">Senior</div>
                <div className="column"><select>
                    <option value="grapefruit">1%</option>
                    <option value="lime">2%</option>
                    <option value="coconut">3%</option>
                    <option value="mango">4%</option>
                </select></div>
                <div className="column ">
                    <input value={'25000kc/meisc'} type="text" disabled={true}/>
                </div>
            </div>
            <div className="row" >
            <div className="column ">Junior</div>
                <div className="column"><select>
                    <option value="grapefruit">1%</option>
                    <option value="lime">2%</option>
                    <option value="coconut">3%</option>
                    <option value="mango">4%</option>
                </select></div>
                <div className="column ">
                    <input value={'25000kc/meisc'} type="text" disabled={true}/>
                </div>
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
export default PracovniciRecepce;

