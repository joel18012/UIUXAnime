import React, {useEffect, useState} from 'react';
import './CuadroAnime.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Notificacion from './Notificacion';

import { useAuth }  from '../hook/useAuth'

function CuadroAnime(props) {
    const auth = useAuth();
    const {imagen, titulo, id } = props;
    const [animes, setAnimes] = useState([])
    const [existe, setExiste] = useState()
    const [notificar, setNotificar] = useState(false)

    useEffect(() => {
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
    }, [])

    const verificar = (id,user,nombre,img) => {
        const Dato = {
            Anime: id,
            User: user,
            Nombre: nombre,
            Img:img,
        }
        console.log(notificar)
        console.log(animes)

        if(animes.some(i => i.Anime === Dato.Anime && i.User === Dato.User)){
            setExiste(true);
            return true;
        }
       else{ 
           setExiste(false);
           auth.addAnimeToList(id,auth.user.email,nombre,img);
        }
    }

    function renderNotificar(exist){
        return(
            <Notificacion existe={exist} borrar={false}></Notificacion>
        )
    }
    const Notificando = () => {
        if(!notificar) setNotificar(true)
        setTimeout(() => {
               setNotificar(false) 
            }, 1000);
    } 
    return (
            <div className='d-inline-block'> 
                <div className="CuadroImagen imagenSmall " style={{ backgroundImage: `url(${imagen})`}}>
                    <a href={`/Anime/${id}`} >
                    <div style={{ width:'100%', height:'100%',position:'absolute',padding:15}}>
                        <div className="difuminadoCuadro">
                            <h6 className="tituloCuadro text-break">{titulo}</h6>
                        </div>
                    </div>
                    </a>
                        {auth.user ? 
                            <button className='btn-Corazon'  onClick={()=>{
                                verificar(id,auth.user.email,titulo,imagen)
                                Notificando()
                                }}>
                                <FontAwesomeIcon icon={faHeart} className="mx-2"/>
                            </button> 
                            : undefined}
                </div>
                {notificar && renderNotificar(existe)}
            </div>
    )
}

export default CuadroAnime;