import React from 'react';
import './CuadroAnime.css'

function CuadroAnime(props) {
    const { imagen, titulo } = props;
    return (
        <div className="CuadroImagen imagenSmall" style={{ backgroundImage: `url(${imagen})`, padding:10}}>
            <div className="difuminadoCuadro">
                <h6 className="tituloCuadro text-break">{titulo}</h6>
            </div>
        </div>
    )
}

export default CuadroAnime;