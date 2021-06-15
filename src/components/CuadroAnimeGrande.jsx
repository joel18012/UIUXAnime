import React from 'react';
import './CuadroAnimeGrande.css'

function CuadroAnimeGrande(props) {
    const { imagen, titulo, texto, tipo } = props;
    return (
        <div className="cover-item imagen mx-2" style={{ backgroundImage: `url(${imagen})` }}>
            <div className="difuminado">
                <div className='Tipo'>Popular</div>
                <div className='Toplace'>
                    <h6 className="titulo">{titulo}</h6>
                    <p className="synopsis">
                        {texto}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default CuadroAnimeGrande;