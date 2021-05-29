import React, { useState, useEffect } from 'react';
import ElementoListaAnime from './ElementoListaAnime';
import { useParams } from 'react-router-dom';


function TopAnimes(props) {
    const { id } = useParams();
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

    return (<div className="row-fluid noticias" >
        <div class="col-lg-12 col-md-10 " >
            <h3 > Top Animes </h3>
            <div className="cover-item imagen text-break"
                style={{ backgroundImage: `url(${todos.url_imagen})` }}>
            </div>
            {id}
        </div>
    </div>

    )

}

export default TopAnimes;