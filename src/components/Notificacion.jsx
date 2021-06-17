import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './Login.css'


export const Notificacion = (props) => {
    const {existe} = props ;
    const {eliminar} = props ;

    function _Del() {
        return(
            <div className='notify'>
                <div className='notifyContent col-12' style={{textAlign:'center',fontFamily:'roboto',backgroundColor: '#ffcccc'}}>
                    El anime se ha eliminado de tus favoritos
                </div>
            </div>
        )
    }

    function renderNot(e) {
        if(e){
            return (
                <div className='notify'>
                    <div className='notifyContent col-12' style={{textAlign:'center',fontFamily:'roboto',backgroundColor: '#ffefcc'}}>
                        El anime ya se encuentra en tus favoritos
                    </div>
                </div> 
            )
        }
        else{
            return(
                <div className='notify'>
                    <div className='notifyContent col-12' style={{textAlign:'center',fontFamily:'roboto',backgroundColor: '#ccffe7'}}>
                        El anime se ha agregado a tus favoritos
                    </div>
                </div>
            )
        }   
    }
    return (
        <div>
             {
                eliminar ? _Del() : renderNot(existe)
             }
        </div>
    )
}

export default Notificacion;
