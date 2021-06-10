import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Login from './Login';

function MenuTop() {
    const [login,setLogin] = useState(false);

    //aqui falta info del login
    return (
        <nav class="bordeb navbar navbar-light bg-light" style={style.NavBar}>
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

                <div>
                    <button className="btn btn-light" onClick={()=>login ? setLogin(false):setLogin(true) }>Iniciar Sesion</button>
                    <button className="btn btn-dark" style={{borderRadius:20}}>Registrarse</button>
                </div>
            </div>
            

        </nav>
    )
}

const style = {
    NavBar: {
        borderRadius:18,
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