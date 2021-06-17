import React from 'react';
import { Redirect } from 'react-router-dom';
import './CuadroAnimeGrande.css'

function CuadroAnimeGrande(props) {
    const { imagen, titulo, texto, link } = props;
    return (
        <a href={link}>
            <div onClick={Redirect(link)} className="cover-item imagen mx-2" style={{ backgroundImage: `url(${imagen})` }}>
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
        </a>

    )
}

export default CuadroAnimeGrande;