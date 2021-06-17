import React, { useState, useEffect} from 'react';
import CuadroAnime from './CuadroAnime';
import { useParams } from 'react-router-dom';


function Busqueda(props) {
    const {nombre} = useParams();
    
    const url = `https://api.jikan.moe/v3/search/anime?q=${nombre}`;    
    const [todos, setTodos] = useState();
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJSON = await response.json();

        setTodos(responseJSON);
    }
    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div className="row ">
            <div className="col-lg-12 col-md-10" style={{textAlign:'left'}}>
                <h5 style={{textAlign:'left',fontWeight:'bold',padding:8}}>Animes Encontrados</h5>
                {!todos ? 'Cargando...' :
                        todos.results.map((todo, index) => {
                            return index > 17 ? null: <CuadroAnime imagen={todo.image_url} titulo={todo.title} id={todo.mal_id}></CuadroAnime>
                        })
                    }     
            </div>
        </div>
    )
}

export default Busqueda;