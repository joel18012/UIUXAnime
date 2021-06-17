import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTv, faShare } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../hook/useAuth'


const FullPageRight = props => {
    const [todos, setTodos] = useState([]);
    const { id } = useParams();

    const auth = useAuth();
    const [animes, setAnimes] = useState([])
    const [siguiendo,setSiguiendo] = useState(true);

    const [idreg,setidreg] = useState([])

    useEffect(() => {
        const firedb = auth.db.collection('MiLista')
        firedb.onSnapshot(queryShapshot => {
            const datos = [];

            queryShapshot.docs.forEach(doc => {
                const { Anime, User, Nombre, Img } = doc.data()
                if (Anime == id) {
                    setSiguiendo(false);
                    setidreg(doc.id);        
                }

                datos.push({
                    Anime,
                    User,
                    Nombre,
                    Img,
                })
            });

            setAnimes(datos);
        });

        const url = `https://api.jikan.moe/v3/anime/${id}`;
        async function fetchApi() {
            const response = await fetch(url);
            const responseJSON = await response.json();
            const x = responseJSON;
            setTodos(x);
        }
        fetchApi();

    }, [])

    const verificar = (anime, user, Nombre, Img) => {
        const Dato = {
            Anime: anime,
            User: user,
            Nombre: Nombre,
            Img: Img
        }

        if (animes.some(i => i.Anime === anime && i.User === user)) {

            return true;

        }
        auth.addAnimeToList(anime, auth.user.email, Nombre, Img);
    }
    const Remover = (anime, user,) => {
        if (animes.some(i => i.Anime === anime && i.User === user)) {
            auth.delAnimeToList(idreg);
        }
    }

    useEffect(() => {
        console.log(todos)
    }, [todos])

    return (
        <div className="row-fluid">
            <div className="col-lg-12 col-md-10 p-3" style={{ fontFamily: 'roboto' }}>
                {
                    todos.length === 0
                        ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                        : <img src={`${todos.image_url}`} alt="" width='80%' style={{ borderRadius: 50 }} />
                }
                <div>
                    <button className="my-3" style={style.btnFinalizado}>
                        <FontAwesomeIcon icon={faTv} className="mx-2" />
                        FINALIZADO
                    </button>

                    <div>
                        {siguiendo ?
                            <button onClick={() => verificar(todos.mal_id, auth.user.email, todos.title, todos.image_url)} style={{ ...style.btnLista, alignContent: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faHeart} style={{ ...style.btnCircle, background: '#f70845' }} className="mx-2" />
                                <strong>Agregar</strong> a favoritos</button>
                            :
                            <button onClick={() => Remover(todos.mal_id, auth.user.email)} style={{ ...style.btnLista, alignContent: 'center', justifyContent: 'center' }}>
                                <FontAwesomeIcon icon={faHeart} style={{ ...style.btnCircle, background: '#4508f7' }} className="mx-2" />
                                <strong>Quitar</strong> de favoritos</button>
                        }

                        <button style={style.btnLista}>
                            <FontAwesomeIcon icon={faShare} style={{ ...style.btnCircle, background: '#6c7fab' }} className="mx-2" />
                            Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    btnFinalizado: { width: '80%', borderWidth: 0, borderRadius: 50, height: 50 },
    btnLista: { width: '39%', borderWidth: 0, borderRadius: 50, height: 50, marginRight: 5, paddingBottom: 15, },
    btnCircle: { borderRadius: 25, width: 30, height: 30, padding: 5, color: '#fff', position: 'relative', top: 10 }
}
export default FullPageRight
