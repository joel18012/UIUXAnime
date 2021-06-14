import React, { useContext,useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';
import { useAuth }  from '../hook/useAuth'

function MenuTop() {
    const [login,setLogin] = useState(false);
    const auth = useAuth();

    //aqui falta info del login
    return (
        <nav class="navbar navbar-light bg-light sticky-top" style={style.NavBar}>
            {login && <Login open={login}></Login>}
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={style.Texto}>ANIME UWU</a>
                <a className="btn btn-light" style={style.Texto}>
                    <FontAwesomeIcon icon={faHome} className="mx-2"/>
                    Home
                </a>
                <a className="btn btn-light" style={style.Texto}>
                    <FontAwesomeIcon icon={faNewspaper} className="mx-2"/>
                    Noticias
                </a>
                <a className="btn" style={style.Texto}>
                    <FontAwesomeIcon icon={faHeart} className="mx-2"/>
                    Mi lista
                </a>
                <form class="d-flex" style={{backgroundColor:'#fff', borderRadius:20,}}>
                    <input class="form-control" style={{borderWidth:0, borderRadius:20,}} type="search" placeholder="Buscar anime..." aria-label="Search"></input>
                    <button class="btn btn-outline-dark" style={{borderWidth:0,borderRadius:20}} type="submit"><FontAwesomeIcon icon={faSearch} className="mx-2"/></button>
                </form>

                {
                    auth.user ? 
                    <div>
                        <span>{auth.user.email}</span>
                        <button onClick={()=>auth.signout()}>Salir</button>
                    </div>
                    :
                    <div>
                        <button className="btn btn-light" onClick={()=> login ? setLogin(false) : setLogin(true)}>Iniciar Sesion</button>
                        <button className="btn btn-dark" style={{borderRadius:20}}>Registrarse</button>
                    </div>
                }
            </div>
        </nav>
    )
}

const style = {
    NavBar: {
        fontFamily: 'roboto',
        padding: 14,
    },
    Texto: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'roboto'
    }
}
export default MenuTop;