import React, { useEffect, useState } from 'react'
import { useAuth }  from '../hook/useAuth'
import CuadroAnime from './CuadroAnime';

const UserList = (props) => {
    const auth = useAuth();
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        const firedb = auth.db.collection('MiLista')
        firedb.onSnapshot(queryShapshot => {
          const datos = [];
          queryShapshot.docs.forEach(doc => {
              const {Anime,Foto,User} = doc.data()
              datos.push({
                Anime,
                Foto,
                User,
              })
          });
          setAnimes(datos);
          });
    }, [])


    const filter = (arr) => arr.reduce((acc,el)=>{
        if(el.User === auth.user.email){
            acc.push(el)
        } 
        return acc;
    },[])

    if(true){
        console.log(animes)
    }

    if(animes.length === 0){
        return(
            <div className="spinner-border my-5" role="status"><span className="visually-hidden">Loading...</span></div>
            )
    }
    return (
        <div className='p-5' style={{textAlign:'left'}}>
            <h5 style={{textAlign:'left',fontWeight:'bold',}}>MI LISTA DE ANIMES</h5>
            {
                filter(animes).map((el) => {
                    return(
                        <CuadroAnime imagen={el.Foto} titulo={el.Anime}></CuadroAnime>
                    )
                })
            }
        </div>
    )
}

export default UserList
