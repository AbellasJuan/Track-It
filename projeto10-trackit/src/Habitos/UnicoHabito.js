import styled from "styled-components";
import { WeekDays } from "./Habitos.js";
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function UnicoHabito (){
    return(
        <HabitDescription>
            <TitleAndTrashed>
            <h1>Ler 1 capítulo do LIVRO</h1>
            <RiDeleteBin6Line/>
            </TitleAndTrashed>
            <WeekDays>
                <div><span>D</span></div>
                <div><span>S</span></div>
                <div><span>T</span></div>
                <div><span>Q</span></div>
                <div><span>Q</span></div>
                <div><span>S</span></div>
                <div><span>S</span></div>
            </WeekDays>

            
        </HabitDescription >
    )
};

const HabitDescription = styled.div`
    min-width: 85vw;
    height: auto;
    padding-bottom: 15px;
    margin-right: 5px;
    margin-top: 10px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;
    

    h1{
        overflow: hidden;
        font-family: Lexend Deca;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`
const TitleAndTrashed = styled.div`
    display: flex;
    padding-top: 13px;
    padding-left: 17px;
    padding-right: 10px;
    justify-content: space-between;
    font-size: 17px;
    color: #666666;
`