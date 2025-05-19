import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }


    console.log('Usuário cadastrado:', { nome, email, senha });


    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleCadastro}>
      <div className='login-div'>
        <h2>Cadastro de usuario</h2>
        <label>Nome:</label>
        <input
          type='text'
          value={nome}
          placeholder='Usuário...'
          onChange={(e) => setNome(e.target.value)}
        />

        <label>Email:</label>
        <input
          type='email'
          value={email}
          placeholder='Email...'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha:</label>
        <input
          type='password'
          value={senha}
          placeholder='Senha...'
          onChange={(e) => setSenha(e.target.value)}
        />

        <button>Cadastrar</button>
      </div>
    </form>

  );
}

export default Cadastro
