import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

const FullPageInfo = (props) => {
    const [todos, setTodos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
    const url = `https://api.jikan.moe/v3/anime/${id}`;
        async function fetchApi(){
            const response = await fetch(url);
            const responseJSON = await response.json();
            const x = responseJSON;
            setTodos(x);
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
                        <div><strong>Tipo:</strong> {todos.type}</div>
                        <div><strong>Episodios:</strong> #{todos.episodes}</div>
                        <div><strong>Rating:</strong> {todos.score}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default FullPageInfo
