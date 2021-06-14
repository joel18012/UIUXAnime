import React, { useState, useEffect } from 'react';
import ElementoListaAnime from './ElementoListaAnime';
import { useParams } from 'react-router-dom';


function FullPageAnime(props) {
    const [todos, setTodos] = useState([]);
    const {id} = useParams();
    useEffect(() => {
    const url = `https://api.jikan.moe/v3/search/anime?q=${id}&page=1`;
    const datos = [];
        async function fetchApi(){
            const response = await fetch(url);
            const responseJSON = await response.json();
            const x = responseJSON;
            x.results.map((ea, index) => {
                const {title,image_url} = ea;
                datos.push(
                    {
                        title,
                        image_url,
                    }
                )
            })
            setTodos(datos);
        }
        fetchApi();
    },[])

    useEffect(()=>{
        console.log(todos)
    },[todos])
    return (
        <div className="row-fluid noticias">
            <div class="col-lg-12 col-md-10 ">
                <p>Hola</p>
                {todos.length === 0 ? <p>Vacio</p> : <p>{todos[0].title}</p> }
            </div>
        </div>
    )
}

export default FullPageAnime;