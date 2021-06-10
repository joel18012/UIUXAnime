import React, { Component } from 'react'
import './Login.css'
import logo from '../assets/1.png'
 
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            open: props.open
        }
    }

    state={
        open: false
    }
    
    render() {
        return (
        <div>
            {this.state.open &&
            <div className='fondo'> 
                <div className='myCard col-8'>
                    <div className="row">
                        <div className='myCardLeft col-4 pt-5 px-4'>
                            <div style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left'}}>Bienvenido a Anime uwu</div>
                            <div style={{fontFamily:'roboto',fontWeight:'lighter',fontSize:17,textAlign:'left'}}>La mejor web de animes en Latinoamerica</div>
                            <img src={logo}/>
                        </div>
                        <div className='col-8 m-auto' >
                            <div  style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left', marginLeft:48}}>Iniciar Sesión</div>
                            <div className='m-auto ms-5' style={{width:'70%'}}>
                                <input className='myText' type="text" placeholder='Usuario' />
                                <input className='myText btnPass' type="text" placeholder='Contraseña' />
                                <div style={{textAlign:'right'}}>¿Olvidaste tu contraseña?</div>
                                <button className='myText btnLogin'>Iniciar Sesion</button>
                                <div><span>No estas registrado, </span><span>registrate aqui</span></div>
                                <button className='myText btnLogin' onClick={() => this.state.open = false}>Cerrar</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

        )
    }
}