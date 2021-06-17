import React, { useState, useEffect } from 'react';
import ElementoListaAnime from './ElementoListaAnime';


function TopAnimesTemp() {
    const url = 'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1&status=airing';
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
        <div className="row-fluid noticias">
            <div class="col-lg-12 col-md-10 ">
                <h5 style={{fontWeight:'bold',padding:8}}>TOP ANIMES DE TEMPORADA(8)</h5>
                <ol class="list-group">
                    {!todos ? 'Cargando...' :
                        todos.results.map((todo, index) => {
                            return index>7 ? null: <ElementoListaAnime numero={index+1} imagen={todo.image_url} titulo={todo.title} id={todo.mal_id} ></ElementoListaAnime>
                        })
                    }
                    </ol>      
            </div>
        </div>
    )
}

export default TopAnimesTemp;