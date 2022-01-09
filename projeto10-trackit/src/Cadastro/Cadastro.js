import styled from 'styled-components';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from '../service/API.js';
import Swal from 'sweetalert2';

export default function Cadastro() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
	  const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    function fazerCadastro(event){
        event.preventDefault();
        
        const body={
                      email,
                      name: nome,
                      image: foto,
                      password: senha,
                    };

        postSignUp(body)
            .then(() => {
                Swal.fire(
                    {
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'O usuário foi cadastrado',
                    }
                )
                navigate('/')
            })
            
            .catch(() => {
                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Cadastro Inválido',
                        text: 'Todos os campos devem ser preenchidos corretamente',
                    }
                )
            })
            
    };


    return (
     <SignUpContainer>
        <img src="../assets/trackitImage.png" alt=""/>
        
        <form onSubmit={fazerCadastro}>
            <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
            <input type="text" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>
            <input type="url" placeholder='foto' value={foto} onChange={e => setFoto(e.target.value)}/>
            
            <SubmitButton type="submit"> Cadastrar </SubmitButton>
            
            <span> 
                <Link to='/' style={{color: '#52b6ff'}}>
                    Já tem uma conta? Faça login! 
                </Link>
            </span>
        
        </form>
     </SignUpContainer>
    );
}

const SignUpContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
  }

  form{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
   
  }

  input{
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-family: Lexend Deca;
    padding-left: 11px;
    margin-bottom: 6px;
  }

  input::placeholder{
    font-family: Lexend Deca;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
  }

  span{
    margin-top:25px;
    font-family: Lexend Deca;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;  
  }
`
const SubmitButton = styled.button`
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    font-family: Lexend Deca;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    border: #FFFFFF;
`
