import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './style.css';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon(){
  const [id,setId] = useState('');
  const history = useHistory();
  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('session',{id});
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName',response.data.name);
      history.push('/profile');
    }catch(err){
      alert('falha no login tente novamente');
    }
  }


  return(
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="be the hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça o seu Logon</h1>
          <input 
            placeholder="Sua ID"
            value = {id}
            onChange = {e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
        
          <Link to="/register" className="back-link">
            <FiLogIn size={16} color='#e02041'/>
            não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heros"/>
  
    </div>
  );
}

export default Logon;