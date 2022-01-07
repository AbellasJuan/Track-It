import { Container } from "../Login/Login.js";

export default function Cadastro() {
    return (
     <Container>
        <img src="../assets/trackitImage.png" alt=""/>
        <form>
            <input type="email" placeholder='email' />
            <input type="password" placeholder='senha' />
            <input type="text" placeholder='nome' />
            <input type="url" placeholder='foto' />
            <button type="submit">Cadastrar</button>
            <span>Já tem uma conta? Faça login!</span>
        </form>
     </Container>
    );
  }