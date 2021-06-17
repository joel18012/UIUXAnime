import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const FullPageInfo = () => {
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
                const {title,image_url,synopsis,type,episodes,score} = ea;
                datos.push(
                    {
                        title,
                        type,
                        episodes,
                        score,
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
        <div className="row-fluid">
            <div class="col-lg-12 col-md-10 p-3">
            <h5 style={{fontWeight:'bold'}}>INFORMACION</h5>
                {
                    todos.length === 0
                    ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                    : 
                    <div>
                        <div><strong>Titulo:</strong> {todos[0].title}</div>
                        <div><strong>Tipo:</strong> {todos[0].type}</div>
                        <div><strong>Episodios:</strong> #{todos[0].episodes}</div>
                        <div><strong>Rating:</strong> {todos[0].score}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FullPageInfo
