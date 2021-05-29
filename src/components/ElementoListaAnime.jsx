import React from 'react';
import './ElementoListaAnime.css'

function ElementoListaAnime(props) {
    const { imagen, titulo, numero} = props;
    return (
        <li className="renglon d-flex justify-content-Left align-items-center">
            #{numero}            
            <div className="imagen2 ms-2" style={{ backgroundImage: `url(${imagen})` }}>
            </div>
            <p className="text-left m-2 texto2">{titulo}</p>
        </li>
    )
}

export default ElementoListaAnime;