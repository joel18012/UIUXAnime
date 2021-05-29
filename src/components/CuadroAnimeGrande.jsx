import React from 'react';
import './CuadroAnimeGrande.css'

function CuadroAnimeGrande(props) {
    const { imagen, titulo, texto, tipo } = props;
    return (
        <div className="cover-item imagen text-break" style={{ backgroundImage: `url(${imagen})` }}>
            <div className="difuminado">
            </div>
                <h6 className="titulo">{titulo}</h6>
                <p className="synopsis">
                    {texto}{tipo}
                </p>
        </div>
    )
}

export default CuadroAnimeGrande;