import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = props =>{
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.content}
                </div>
                <div className="actions">
                <button className="ui button primary">Ulozit</button>
                <button className="ui button " onClick={()=> props.hideModals()}>Cancel</button>
                </div>
            </div>
        </div>,
        document.querySelector('#qualityRoomModal')
    )
}