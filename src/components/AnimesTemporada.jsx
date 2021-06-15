import React, { useState, useEffect } from 'react';
import CuadroAnime from './CuadroAnime';


function AnimesTemporada() {
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
        <div className="row ">
            <div className="col-lg-12 col-md-10" style={{textAlign:'left'}}>
                <h5 style={{textAlign:'left',fontWeight:'bold',padding:8}}>ANIMES DE TEMPORADA</h5>
                {!todos ? 'Cargando...' :
                        todos.results.map((todo, index) => {
                            return index > 17 ? null: <CuadroAnime imagen={todo.image_url} titulo={todo.title} ></CuadroAnime>
                        })
                    }     
            </div>
        </div>
    )
}

export default AnimesTemporada;