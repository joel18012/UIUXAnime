import React from 'react';

function MenuTop() {
    //aqui falta info del login
    return (
        <nav class="bordeb navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <h4>ANIME UWU</h4></a>
                <button className="btn btn-light">Inicio</button>
                <button className="btn btn-light">Noticias</button>
                <button className="btn btn-light">Mi lista</button>

                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

                <button className="btn btn-light">Iniciar Sesion</button>
                <button className="btn btn-dark" >Registrarse</button>
            </div>
            

        </nav>
    )
}

export default MenuTop;