import React from 'react';
import './ElementoListaAnime.css'

function ElementoListaAnime(props) {
    const { imagen, titulo, numero} = props;
    return (
        <li className="renglon d-flex justify-content-Left align-items-center">
            <div className="imagen2 ms-2" style={{ backgroundImage: `url(${imagen})` }}>
            </div>
            <div>
                <div className="ms-2">{titulo}</div>
                <div className="ms-2 topNumber" style={{textAlign:'left'}}>#{numero}</div>            
            </div>
        </li>
    )
}

export default ElementoListaAnime;