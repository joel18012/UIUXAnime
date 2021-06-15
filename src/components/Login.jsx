import React, { useContext, useEffect, useState } from 'react'
import './Login.css'
import logo from '../assets/1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useAuth }  from '../hook/useAuth'

function Login(props){

    const auth = useAuth();
    const [open,setOpen] = useState(false);
    const [registro,setRegistro] = useState(false);

    const [_email,setEmail] = useState();
    const [password,setPassword] = useState();

    useEffect(() => {
        setOpen(props.open)
        setRegistro(props.registro)
    }, [])

    const handleChangeEmail = (event) =>{
        setEmail(event.target.value);
      }
    
      const handleChangePass = (event) =>{
        setPassword(event.target.value);
    }
    return (
        <div>
            {open &&
            <div className='fondo'> 
                <div className='myCard col-8'>
                    <button className='myText btnCerrar' onClick={() =>setOpen(false)}>
                        <FontAwesomeIcon icon={faTimes} className="mx-2"/>
                    </button>
                    <div className="row">
                        <div className='myCardLeft col-4 pt-5 px-4'>
                            <div style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left'}}>Bienvenido a Anime uwu</div>
                            <div style={{fontFamily:'roboto',fontWeight:'lighter',fontSize:17,textAlign:'left'}}>La mejor web de animes en Latinoamerica</div>
                            <img src={logo}/>
                        </div>
                        <div className='myCardRight col-8 m-auto'>
                            <div className='m-auto' style={{width:'60%'}}>
                                <div style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left',margin:'auto'}}>Iniciar Sesión</div>
                                <input className='myText btnPass' type="text" placeholder='Usuario' onChange={handleChangeEmail}/>
                                <input className='myText btnPass' type="password" placeholder='Contraseña' onChange={handleChangePass}/>
                                <a  href='#' style={{color:'#4e7dd5',textDecoration:'none'}}>¿Olvidaste tu contraseña?</a>
                                <button className='myText btnLogin' onClick={()=>{
                                    auth.signin(_email,password)
                                    }}>Iniciar Sesion
                                    {auth.user && setOpen(false)}
                                    </button>
                                <div style={{textAlign:'center',marginTop:80,fontSize:13,}}><span>No estas registrado, </span><a href='#' onClick={()=>{
                                    setOpen(false);
                                    setRegistro(true);
                                    }} style={{color:'#36ea8f',textDecoration:'none'}}>registrate aqui</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}

            {
                registro &&
                <div className='fondo'> 
                    <div className='myCard col-8'>
                        <button className='myText btnCerrar' onClick={() =>{setRegistro(false);setOpen(false)}}>
                            <FontAwesomeIcon icon={faTimes} className="mx-2"/>
                        </button>
                        <div className="row">
                            <div className='myCardLeft col-4 pt-5 px-4'>
                                <div style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left'}}>Bienvenido a Anime uwu</div>
                                <div style={{fontFamily:'roboto',fontWeight:'lighter',fontSize:17,textAlign:'left'}}>La mejor web de animes en Latinoamerica</div>
                                <img src={logo}/>
                            </div>
                            <div className='myCardRight col-8 m-auto'>
                                <div className='m-auto' style={{width:'60%'}}>
                                    <div style={{fontFamily:'roboto',fontWeight:'bold',fontSize:25,textAlign:'left',margin:'auto'}}>Registro</div>
                                    <input className='myText btnPass' type="text" placeholder='Usuario' onChange={handleChangeEmail}/>
                                    <input className='myText btnPass' type="password" placeholder='Contraseña' onChange={handleChangePass}/>
                                    <button className='myText btnLogin' onClick={()=>{
                                        auth.signup(_email,password);
                                        setRegistro(false);
                                        setOpen(false);
                                        }}>Registrarse
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
        )
}
export default Login
