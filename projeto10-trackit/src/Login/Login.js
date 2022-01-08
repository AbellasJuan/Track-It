import styled from 'styled-components';

export default function App() {
  return (
   <Container>
    <img src="../assets/trackitImage.png" alt=""/>
    <form>
		  <input type="email" placeholder='email'/>
		  <input type="password" placeholder='senha'/>
		  <button type="submit">Login</button>
      <span>Não tem uma conta? Cadastre-se!</span>
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

  button{
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