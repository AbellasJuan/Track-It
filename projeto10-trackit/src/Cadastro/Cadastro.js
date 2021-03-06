import styled from 'styled-components';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from '../service/API.js';
import Swal from 'sweetalert2';
import {ThreeDots} from 'react-loader-spinner';


export default function Cadastro() {
    
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
	  const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");
    const [loading, setLoading] = useState(0);

    function fazerCadastro(event){
        event.preventDefault();
        setLoading(1)
        const body={
                      email,
                      name: nome,
                      image: foto,
                      password: senha
                    };

        postSignUp(body)
            .then(() => {
                Swal.fire(
                    {
                    icon: 'success',
                    title: 'Sucesso!',
                    text: 'O usuário foi cadastrado'
                    }
                )
                navigate('/')
            })
            
            .catch(() => {
              setLoading(0)
                Swal.fire(
                    {
                        icon: 'error',
                        title: 'Cadastro Inválido',
                        text: 'Todos os campos devem ser preenchidos corretamente'
                    }
                )
            })
            
    };

    return (
      <SignUpContainer>
        <img src="../assets/trackitImage.png" alt=""/>
        
        <form onSubmit={fazerCadastro}>
            <Input state={loading} type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
            <Input state={loading} type="password" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
            <Input state={loading} type="text" placeholder='nome' value={nome} onChange={e => setNome(e.target.value)}/>
            <Input state={loading} type="url" placeholder='foto' value={foto} onChange={e => setFoto(e.target.value)}/>
            
            {!loading ? <SubmitButton state={loading}>Cadastrar</SubmitButton> : <SubmitButton state={loading}><ThreeDots type="ThreeDots" color="#ffffff" height={60} width={60} /></SubmitButton>}
          </form>
            <span> 
                <Link to='/' style={{color: '#52b6ff'}}>
                    Já tem uma conta? Faça login! 
                </Link>
            </span>
        
        
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

  span{
    margin-top:25px;
    font-family: Lexend Deca;
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;  
  }
`

const Input = styled.input`
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    padding-left: 11px;
    margin-bottom: 6px;
    color: ${props => props.state ? '#AFAFAF' : '#000000'};
    pointer-events: ${props => props.state ? 'none' : 'all'};
    background-color: ${props => props.state ? '#f2f2f2' : '#ffffff'};
    font-size: 19px;
    font-family: Lexend Deca;

  ::placeholder{
    
    line-height: 25px;
    color: ${props => props.state ? '#afafaf' : '#dbdbdb'};
  }
`

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    border: #FFFFFF;
    color: #FFFFFF;
    opacity: ${props => props.state ? '0.5' : '1'};
    pointer-events: ${props => props.state ? 'none' : 'all'};
    font-family: Lexend Deca;
`;
