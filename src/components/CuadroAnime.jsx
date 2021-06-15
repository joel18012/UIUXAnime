import React, {useEffect, useState} from 'react';
import './CuadroAnime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { useAuth }  from '../hook/useAuth'

function CuadroAnime(props) {
    const auth = useAuth();
    const { imagen, titulo } = props;

    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if (auth.user) {
            const firedb = auth.db.collection('MiLista')
            firedb.onSnapshot(queryShapshot => {
            const datos = [];
            queryShapshot.docs.forEach(doc => {
              const {Anime,Foto,User} = doc.data()
              datos.push({
                Anime,
                Foto,
                User,
              })
          });
          setAnimes(datos);
          });
        }
    }, [])

    const verificar = (titulo,imagen,user)=>{
        const Dato = {
            Anime: titulo,
            Foto: imagen,
            User: user,
        }
        
        if(animes.some(i => i.Anime == Dato.Anime && i.Foto == Dato.Foto&& i.User == Dato.User)){
            console.log('existe');
            return true;
        }
       auth.addAnimeToList(titulo,imagen,auth.user.email);
    }
    return (
        <div className="CuadroImagen imagenSmall" style={{ backgroundImage: `url(${imagen})`, padding:10}}>
            {auth.user ? 
                <button className='btn-Corazon' onClick={()=>verificar(titulo,imagen,auth.user.email)}>
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