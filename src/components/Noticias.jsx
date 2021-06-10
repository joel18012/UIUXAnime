import React, { useState, useEffect } from 'react';
import CuadroAnimeGrande from './CuadroAnimeGrande'


function Noticias() {
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
            <h5 style={{textAlign:'left',fontWeight:'bold',}}>NOTICIAS</h5>
            <div class="col-lg-12 col-md-10 ">
                <div class="cover-container">
                    {!todos ? 'Cargando...' :
                        todos.results.map((todo, index) => {
                            return <CuadroAnimeGrande texto={todo.synopsis} imagen={todo.image_url} titulo={todo.title} ></CuadroAnimeGrande>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Noticias;