import React, { useState, useEffect } from 'react';
import ElementoListaAnime from './ElementoListaAnime';


function TopAnimes() {
    const url = 'https://api.jikan.moe/v3/search/anime?q=&order_by=members&sort=desc&page=1';
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
                <h3>Top Animes</h3>
                <ol class="list-group">
                    {!todos ? 'Cargando...' :
                        todos.results.map((todo, index) => {
                            return index>4 ? null: <ElementoListaAnime numero={index+1} imagen={todo.image_url} titulo={todo.title} ></ElementoListaAnime>
                        })
                    }
                    </ol>      
            </div>
        </div>
    )
}

export default TopAnimes;