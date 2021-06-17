import React, { useEffect, useState } from 'react'
import { useAuth }  from '../hook/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Comentarios = (props) => {
    const auth = useAuth();
    const [comentario,setComentario] = useState();
    const [anime,setAnime] = useState();

    useEffect(() => {
        setAnime(props.anime)
    }, [])

    const handleChangeComment = (event) =>{
        setComentario(event.target.value);
      }

      
    return (
        <div>
            {
            auth.user 
            ?<div style={{}}>
                <button className='d-inline-block' style={{borderRadius:30,borderWidth:0,width:60,height:60,backgroundColor:'#efefef',textAlign: 'center'}}>
                    {auth.user.email.substring(0,1).toUpperCase()}
                </button>
                <input type="text" onChange={handleChangeComment} placeholder='Agregar comentario...' style={{width:'80%',height:60,paddingLeft:5,marginLeft:10, borderRadius:20, borderWidth:0, backgroundColor:'#efefef', marginRight:10}}/>
                <button onClick={()=>{auth.addComentToAnime(anime,auth.user.email,comentario)}} style={{borderRadius:30,borderWidth:0,width:60,height:60,backgroundColor:'#efefef',textAlign: 'center'}}>
                    <FontAwesomeIcon icon={faPaperPlane} style={{fontSize:20}}/>
                </button>
            </div>
            :undefined
            }
        </div>
        
    )
}

export default Comentarios