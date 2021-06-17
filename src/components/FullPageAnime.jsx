import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comentarios from './Comentarios';
import { useAuth }  from '../hook/useAuth'


function FullPageAnime(props) {
    const auth = useAuth();

    const [todos, setTodos] = useState([]);
    const [cometarios,setComentarios] = useState([]);
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
        const firedb = auth.db.collection('Comentarios')
        firedb.onSnapshot(queryShapshot => {
          const datos = [];
          queryShapshot.docs.forEach(doc => {
              const {Anime,Comment,User} = doc.data()
              datos.push({
                Anime,
                Comment,
                User,
              })
          });
          setComentarios(datos);
          });
    },[])

    const filter = (arr) => arr.reduce((acc,el)=>{
        if(el.Anime === todos[0].title){
            acc.push(el)
        } 
        return acc;
    },[])

    return (
        <div className="row-fluid noticias">
            <div className="col-lg-12 col-md-12 col-sm-12 p-5" style={{textAlign:'left', fontFamily:'roboto',}}>
                    <h5 style={{textAlign:'left',fontWeight:'bold'}}>SINOPSIS</h5>
                    {todos.length === 0 
                        ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                        : <div>{todos[0].synopsis}</div> 
                    }
                    <h5 style={{textAlign:'left',fontWeight:'bold',marginTop:30}}>COMENTARIOS</h5>
                    {todos.length === 0 
                        ? <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                        : <Comentarios anime={todos[0].title}></Comentarios>
                    }
                    {
                        cometarios.length === 0
                        ?<div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>
                        :filter(cometarios).map( el => {
                            return(
                                <div style={{marginTop:20,paddingBottom:20,borderBottom:'solid 1px #efefef'}}>
                                    <button style={{borderRadius:30,borderWidth:0,width:60,height:60,backgroundColor:'#efefef',textAlign: 'center'}}>
                                        {el.User.substring(0,1).toUpperCase()}
                                    </button>
                                    <div className='d-inline-flex' style={{marginLeft:10,fontFamily:'roboto',fontWeight:'normal',fontSize:15}}> 
                                        <span><strong> {el.User} </strong><br></br>
                                        {el.Comment}</span>
                                    </div>
                                </div>
                            )  
                        })
                    }
            </div>
        </div>
    )
}

export default FullPageAnime;