import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNewspaper, faHeart, faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import Login from './Login';
import { useAuth } from '../hook/useAuth'

function MenuTop() {
    const [login, setLogin] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const auth = useAuth();

    //aqui falta info del login
    return (
        <nav class="navbar navbar-light bg-light sticky-top" style={style.NavBar}>
            {login && <Login open={login} ></Login>}
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={style.Texto}>ANIME UWU</a>
                <a className="btn btn-light" style={style.Texto} href='/Inicio'>
                    <FontAwesomeIcon icon={faHome} className="mx-2" />
                    Home
                </a>
                <a className="btn btn-light" style={style.Texto} href='/#'>
                    <FontAwesomeIcon icon={faNewspaper} className="mx-2" />
                    Noticias
                </a>
                <a className="btn" style={style.Texto} href='/MiLista'>
                    <FontAwesomeIcon icon={faHeart} className="mx-2" />
                    Favoritos
                </a>
                <form action={`/buscar/${searchQuery}`} class="d-flex" style={{ backgroundColor: '#fff', borderRadius: 20, }}>
                    <input value={searchQuery}
                        onInput={e => setSearchQuery(e.target.value)}
                        name="nombre"
                        class="form-control"
                        style={{ borderWidth: 0, borderRadius: 20, }}
                        type="search"
                        placeholder="Buscar anime..."
                        aria-label="Search">
                    </input>
                    <button class="btn btn-outline-dark" style={{ borderWidth: 0, borderRadius: 20 }} type="submit"><FontAwesomeIcon icon={faSearch} className="mx-2" /></button>
                </form>

                {
                    auth.user ?
                        <div>
                            <button className="btn-circle" style={{ ...style.btnCircle, marginLeft: 5 }}>
                                {auth.user.email.substring(0, 1).toUpperCase()}
                            </button>
                            <button className="btn-circle" style={{ ...style.btnCircle, marginLeft: 5 }} onClick={() => auth.signout()}>
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </button>
                        </div>
                        :
                        <div>
                            <button className="btn btn-light" onClick={() => login ? setLogin(false) : setLogin(true)}>Iniciar Sesion</button>
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
    },
    btnCircle: {
        borderRadius: 25,
        borderWidth: 0,
        width: 40,
        height: 40
    }
}
export default MenuTop;