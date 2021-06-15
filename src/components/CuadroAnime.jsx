import React from 'react';
import './CuadroAnime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { useAuth }  from '../hook/useAuth'

function CuadroAnime(props) {
    const auth = useAuth();
    const {email} = auth.user;
    const { imagen, titulo } = props;
    return (
        <div className="CuadroImagen imagenSmall" style={{ backgroundImage: `url(${imagen})`, padding:10}}>
            {auth.user ? 
                <button className='btn-Corazon'>
                    <FontAwesomeIcon icon={faHeart} className="mx-2"/>
                </button> 
                : undefined}
            <div className="difuminadoCuadro">
                <h6 className="tituloCuadro text-break">{titulo}</h6>
            </div>
        </div>
    )
}

export default CuadroAnime;