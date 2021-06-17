import React, { useState, useEffect } from 'react';
import CuadroAnimeGrande from './CuadroAnimeGrande'


function Noticias() {
    const url = 'https://api.jikan.moe/v3/anime/1/news';
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
            <h5 style={{textAlign:'left',fontWeight:'bold',}}>NOTICIAS</h5>
            <div class="col-lg-12 col-md-10 ">
                <div class="cover-container">
                    {!todos ? 'Cargando...' :
                        todos.articles.map((todo, index) => {
                            return <CuadroAnimeGrande texto={todo.title} imagen={todo.image_url} link={todo.url} ></CuadroAnimeGrande>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Noticias;