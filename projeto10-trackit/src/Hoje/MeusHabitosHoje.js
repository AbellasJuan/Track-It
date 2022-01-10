import styled from "styled-components";

import Footer from "../Footer.js";
import Header from "../Header.js";
import HabitoHoje from "./HabitoHoje.js";

import * as dayjs from 'dayjs';
import { useContext, useEffect} from 'react';
import UserContext from '../Context/UserContext.js';
import { toggleHabit, getTodayHabits } from '../service/API.js';

export default function MeusHabitosHoje(){

    require('dayjs/locale/pt-br');

    const date = dayjs().locale('pt-br').format(`dddd, DD/MM`);

    const { user, todayHabits, setTodayHabits } = useContext(UserContext);

    useEffect(() => {
        getTodayHabits(user.token)
            .then((response) => setTodayHabits(response.data))
            .catch(() => console.error)
    }, [user.token, setTodayHabits, todayHabits]);

    function calcPercentage () {
        const progress = todayHabits.filter(habit => habit.done).length;
        const totalHabits = todayHabits.length;

        return ((progress/totalHabits) * 100).toFixed(0);
    }

    return(
        <TodayContainer>
            <Header/>

            <TitleToday>
                <h1>{date}</h1>
                
                <Progress state={todayHabits.filter(habit => habit.done).length === 0}>{todayHabits.filter(habit => habit.done).length === 0 ? 'Nenhum hábito concluído ainda' : `${calcPercentage()}% dos hábitos concluídos`}</Progress>
            
            </TitleToday>
        
            {todayHabits.map((habit, index) => 
                <HabitoHoje 
                    key={index}
                    user={user}
                    id={habit.id}
                    name={habit.name}
                    status={habit.done}
                    habitCurrent={habit.currentSequence}
                    habitRecord={habit.highestSequence}
                    toggleHabit={toggleHabit}
                    />
            )}
                    
            <Footer/>
        </TodayContainer>
    )
};

const Progress = styled.h2`
    font-size: 18px;
    color: ${props => props.state ? '#bababa' : '#8fc549'};
    margin-top: 7px;
    font-size: 18px;
`

const TodayContainer = styled.div` 
    background-color: #E5E5E5;
    padding-left: 17px;
    padding-bottom: 110px;
    max-width: 100%;
    min-height: calc(100vh - 98px);
`

const TitleToday = styled.div`
   font-family: Lexend Deca;
   padding-top: 98px;
   padding-bottom: 26px;

   h1{
    font-size: 23px;
    color: #126BA5;
    }
`