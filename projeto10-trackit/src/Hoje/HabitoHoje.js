import styled from "styled-components";
import { BsCheckSquareFill } from 'react-icons/bs';

export default function HabitoHoje(){
    return(
        <TodayHabit>
            <h1>Ler 1 capitulo do livro</h1>
            <h2>Sequencia atual: 3 dias</h2>
            <h3>Seu recorde: 3 dias</h3>
            
            <div><BsCheckSquareFill/></div>
        </TodayHabit>
    )
};

const TodayHabit = styled.div`
    min-width: 85vw;
    margin-top: 10px;
    margin-right: 17px;
    border-radius: 5px;
    background-color: #FFFFFF;
    padding-top: 13px;
    padding-left: 15px;
    padding-bottom: 17px;
    position: relative;
    
    
    h1{
        padding-right: 80px;
        font-family: Lexend Deca;
        font-size: 20px;
        color: #666666;
    }

    h2{
        padding-right: 75px;
        padding-top: 7px;
        font-family: Lexend Deca;
        font-size: 13px;
        color: #666666;
    }

    h3{
        padding-top: 5px;
        font-family: Lexend Deca;
        font-size: 13px;
        color: #666666;
    }

    div{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 69px;
        color: #EBEBEB;
    }
`