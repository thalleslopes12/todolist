import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageInicial() {
    const navigate = useNavigate();

    const IrParaLogin = () => {
        navigate('/login');
    }

    const IrParaCadastro = () => {
        navigate('/cadastro');
    }

    return (
        <div>
            <h1>Bem vindo!</h1>
            <p>Você já possui conta?</p>
            <button onClick={IrParaLogin}>Sim</button>
            <button onClick={IrParaCadastro}>Não</button>
        </div>
    );
}

export default PageInicial
