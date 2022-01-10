import styled from 'styled-components';
import { MdAddBox } from 'react-icons/md';
import UserContext from '../Context/UserContext.js';
import { useContext, useEffect, useState } from 'react';
import { getUserHabits } from '../service/API.js';
import Header from '../Header.js';
import Footer from '../Footer.js';
import UnicoHabito from './UnicoHabito.js';
import CriarHabito from './CriarHabito.js';

export default function Habitos() {

    const { user } = useContext(UserContext);
    const weekdays = [
        {
            day: 'D',
            dayID: 0,
            isAvailable: 1
        },
        {
            day: 'S',
            dayID: 1,
            isAvailable: 1
        },
        {
            day: 'T',
            dayID: 2,
            isAvailable: 1
        },
        {
            day: 'Q',
            dayID: 3,
            isAvailable: 1
        },
        {
            day: 'Q',
            dayID: 4,
            isAvailable: 1
        },
        {
            day: 'S',
            dayID: 5,
            isAvailable: 1
        },
        {
            day: 'S',
            dayID: 6,
            isAvailable: 1
        },
    ];

    const [habits, setHabits] = useState([]);
    const [container, setContainer] = useState(0);

    useEffect(() => {
        getUserHabits(user.token)
            .then((response) => setHabits(response.data))
            .catch(() => console.error);
    }, [user.token]);


    return (
        <>
        <Header/>
        <HabitsContainer>
            <MyHabits onClick={() => setContainer(1)} >
                <span>Meus hábitos</span>
                <MdAddBox/>
            </MyHabits>

            <CriarHabito weekdays={weekdays} container={container} setContainer={setContainer} setHabits={setHabits}/>
            

            <UnicoHabito habits={habits} setHabits={setHabits} weekdays={weekdays}/>
            

            {habits.length === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p> : ''}
            
        </HabitsContainer>
        <Footer/>
        </>
    );
  }

const HabitsContainer = styled.div`
    max-width: 100%;
    min-height: calc(100vh - 98px);
    background-color: #E5E5E5;
    padding-top: 98px;
    padding-left: 17px;
    padding-right: 18px;
    padding-bottom: 110px;

    p{
        padding-top: 28px;
        height: 74px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        font-family: Lexend Deca;
    }
`

const MyHabits = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 45px;
    color: #52B6FF;
    
    span{
        font-family: Lexend Deca;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`;