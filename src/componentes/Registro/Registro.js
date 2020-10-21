import React, { Component,useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';

import { Link } from 'react-router-dom';


const Registro = ()=>{
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');
    const firebase= useFirebaseApp();


    const submit = async ()=>{
       await firebase.auth().createUserWithEmailAndPassword(email,password);
    }
    
        return (
            <div className="InicioSesion">
        <h1>Registro</h1>
        <div className="form">
            <div className="grupo-inputs">
                <input type="email" id='email' placeholder="Email" onChange={ (ev)=> setEmail(ev.target.value)} />
                <input type="password" placeholder="Contraseña" onChange={ (ev)=> setPassword(ev.target.value)}/>
            </div>
            <button class="botonIniciarSesion" onClick ={submit}>Registrate</button>
        </div>
    </div>
        );
}
 
export default Registro;