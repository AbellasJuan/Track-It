import styled from "styled-components";
import Footer from "../Footer.js";
import Header from "../Header.js";

export default function Historico(){
    return(
        <>
        <Header/>
        <HistoryContainer>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
        </HistoryContainer>
        <Footer/>
        </>
    )
};

const HistoryContainer = styled.div`
    width: 100vw;
    min-height: 85vh;
    background-color:  #E5E5E5;
    padding-top: 98px;
    

    h1{
        padding-left: 17px;
        font-family: Lexend Deca;
        font-style: normal;
        font-weight: normal;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    h2{
        padding-left: 17px;
        font-family: Lexend Deca;
        font-size: 18px;
        line-height: 22px;
        margin-top: 17px;
        color: #666666;
    }
`