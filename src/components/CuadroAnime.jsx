import React, {useEffect, useState} from 'react';
import './CuadroAnime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import { useAuth }  from '../hook/useAuth'

function CuadroAnime(props) {
    const auth = useAuth();
    const { imagen, titulo, id } = props;
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        if (auth.user) {
            const firedb = auth.db.collection('MiLista')
            firedb.onSnapshot(queryShapshot => {
            const datos = [];
            queryShapshot.docs.forEach(doc => {
              const {Anime,User,Nombre,Img} = doc.data()
              datos.push({
                Anime,
                User,
                Nombre,
                Img
              })
          });
          setAnimes(datos);
          });
        }
    }, [])

    const verificar = (titulo,user,nombre,img)=>{
        const Dato = {
            Anime: titulo,
            User: user,
            Nombre: nombre,
            Img:img,
        }
        
        if(animes.some(i => i.Anime === Dato.Anime && i.User === Dato.User)){
            console.log('existe');
            return true;
        }
       auth.addAnimeToList(titulo,auth.user.email,nombre,img);
    }
    return (
        <div className="CuadroImagen imagenSmall" style={{ backgroundImage: `url(${imagen})`}}>
            <a href={`/Anime/${id}`} >
            <div style={{ width:'100%', height:'100%',position:'absolute',padding:15}}>
                <div className="difuminadoCuadro">
                    <h6 className="tituloCuadro text-break">{titulo}</h6>
                </div>
            </div>
            </a>
                {auth.user ? 
                    <button className='btn-Corazon'  onClick={()=>verificar(id,auth.user.email,titulo,imagen)}>
                        <FontAwesomeIcon icon={faHeart} className="mx-2"/>
                    </button> 
                    : undefined}
        </div>
    )
}

export default CuadroAnime;