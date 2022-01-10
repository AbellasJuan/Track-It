import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from 'react';
import UserContext from '../src/Context/UserContext.js';

export default function Footer(){
    
    const { todayHabits } = useContext(UserContext);

    function calcPercentage() {
        const progress = todayHabits.filter(habit => habit.done).length;
        const totalHabits = todayHabits.length;
        return ((progress/totalHabits) * 100).toFixed(0);
    }
    
    return(
        <StyledFooter>
            
            <span>
                <Link to='/habitos' style={{textDecoration: 'none', color: '#52b6ff'}}> Hábitos </Link>
            </span>

            <div>
                <Link to='/hoje' style={{textDecoration: 'none'}}>
                    <CircularProgressbar
                    value= {todayHabits.length !== 0 ? calcPercentage() : '0'}
                    text= "Hoje"
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52b6ff",
                        textSize: '19px',
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />
                </Link>
            </div>
            
            <span>
                <Link to='/historico' style={{textDecoration: 'none', color: '#52b6ff'}}> Histórico </Link>
            </span>

        </StyledFooter>
    )
};

const StyledFooter = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 2;

    div{
        font-family: Lexend Deca;
        width: 92px;
        height: 92px;
        padding-bottom: 35px;
    }

    span{    
        font-family: Lexend Deca;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;    
    }
`