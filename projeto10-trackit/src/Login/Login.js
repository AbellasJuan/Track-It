import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useState } from "react";
import { postLogin } from "../service/API";

export default function Login({ setUser }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function fazerLogin(event) {
    event.preventDefault();
          const body =  {
                          email,
                          password: senha,
                        }

    postLogin(body)
        .then(response => {
            setUser(response.data)
            navigate('/hoje')
            console.log('foi')
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: 'Usuário e/ou senha incorretos!',
            })});
  }  

  return (
    <Container>
        <img src="../assets/trackitImage.png" alt=""/>
        <form onSubmit={fazerLogin}>
          <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder='senha' value={senha} onChange={e => setSenha(e.target.value)}/>
          <SubmitButton type="submit"> Login </SubmitButton>
          <span>
            <Link to='/cadastro' style={{color: '#52b6ff'}}> Não tem uma conta? Cadastre-se! </Link>
          </span>
        </form>
    </Container>
  );
}

const Container = styled.div`
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