import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faTv,faShare } from '@fortawesome/free-solid-svg-icons'

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
        <div className="row-fluid">
            <div className="col-lg-12 col-md-10 p-3" style={{fontFamily:'roboto'}}>
                {
                    todos.length === 0
                    ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                    : <img src={`${todos[0].image_url}`} alt="" width='80%' style={{borderRadius:50}}/>
                }
                <div>
                    <button className="my-3" style={style.btnFinalizado}>
                        <FontAwesomeIcon icon={faTv} className="mx-2"/>
                        FINALIZADO
                    </button>
                    <div>
                        <button style={{...style.btnLista,alignContent:'center',justifyContent:'center'}}>
                            <FontAwesomeIcon icon={faHeart} style={{...style.btnCircle,background:'#f70845'}} className="mx-2"/>
                            <strong>Agregar</strong> a mi lista</button>
                        <button style={style.btnLista}>
                            <FontAwesomeIcon icon={faShare} style={{...style.btnCircle,background:'#6c7fab'}} className="mx-2"/>    
                            Compartir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const style = {
    btnFinalizado:{width:'80%',borderWidth:0,borderRadius:50,height:50},
    btnLista:{width:'39%',borderWidth:0,borderRadius:50,height:50,marginRight:5,paddingBottom:15,},
    btnCircle:{borderRadius: 25,width:30,height:30,padding:5, color:'#fff',position:'relative',top:10}
}
export default FullPageRight
