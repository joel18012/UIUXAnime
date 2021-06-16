import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

const FullPageRight = props => {
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
            <div class="col-lg-12 col-md-10 p-3">
                {
                    todos.length === 0
                    ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                    : <img src={`${todos[0].image_url}`} alt="" width='80%' style={{borderRadius:50}}/>
                }
            </div>
        </div>
    )
}

export default FullPageRight
