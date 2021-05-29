import React from 'react';
import './CuadroAnime.css'

function CuadroAnime(props) {
    const { imagen, titulo } = props;
    return (
        <div className="CuadroImagen imagen" style={{ backgroundImage: `url(${imagen})` }}>
            <div className="difuminadoCuadro">
            </div>
            <h6 className="tituloCuadro text-break">{titulo}</h6>
        </div>
    )
}

export default CuadroAnime;