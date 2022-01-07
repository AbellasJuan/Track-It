import styled from 'styled-components';
import { MdAddBox } from 'react-icons/md';
import Header from '../Header';

export default function Habitos() {
    return (
        <>
        <Header/>
        <HabitsContainer>
            <AddHabit>
                <span>Meus hábitos</span>
                <MdAddBox/>
            </AddHabit>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </HabitsContainer>
        </>
    );
  }

const HabitsContainer = styled.div`
    max-width: 100%;
    background: #E5E5E5;
    min-height: 100vh;    

    padding-top: 98px;
    padding-left: 17px;
    padding-right: 18px;

    p{
        padding-top: 28px;
        height: 74px;
        font-family: Lexend Deca;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`

const AddHabit = styled.div`

    display:flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    color: #52B6FF;
    
    span{
        font-family: Lexend Deca;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

`


