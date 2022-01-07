import styled from "styled-components";

import Footer from "../Footer.js";
import Header from "../Header.js";
import HabitoHoje from "./HabitoHoje.js";

export default function MeusHabitosHoje(){
    return(
        <TodayContainer>
        <Header/>
        <TitleToday>
            <h1>Segunda, 17/05</h1>
            <h2>Nenhum hábito concluído ainda</h2>
        </TitleToday>
       
       <HabitoHoje/>
       <HabitoHoje/>
       <HabitoHoje/>

        <Footer/>
        </TodayContainer>
    )
};

const TodayContainer = styled.div` 
    background-color: #E5E5E5;
    min-height: 80vh;
    padding-left: 17px;
    padding-bottom: 110px;
`

const TitleToday = styled.div`
   font-family: Lexend Deca;
   padding-top: 98px;
   padding-bottom: 10px;

   h1{
    font-size: 23px;
    color: #126BA5;
    }

   h2{
    margin-top: 7px;
    font-size: 18px;
    color: #BABABA;
    }
`