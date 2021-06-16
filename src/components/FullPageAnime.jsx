import React, { useState, useEffect } from 'react';
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
                const {title,image_url,synopsis} = ea;
                datos.push(
                    {
                        title,
                        image_url,
                        synopsis,
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
            <div className="col-lg-12 col-md-12 col-sm-12 p-5" style={{textAlign:'left', fontFamily:'roboto',}}>
                    <h5 style={{textAlign:'left',fontWeight:'bold'}}>SINOPSIS</h5>
                    {todos.length === 0 
                        ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                        : <div>{todos[0].synopsis}</div> 
                    }
                    <h5 style={{textAlign:'left',fontWeight:'bold',marginTop:30}}>COMENTARIOS</h5>

            </div>
        </div>
    )
}

export default FullPageAnime;