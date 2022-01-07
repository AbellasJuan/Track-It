import styled from 'styled-components';
import { MdAddBox } from 'react-icons/md';
import Header from '../Header.js';
import Footer from '../Footer.js';

export default function Habitos() {
    return (
        <>
        <Header/>
        <HabitsContainer>
            <MyHabits>
                <span>Meus hábitos</span>
                <MdAddBox/>
            </MyHabits>
            <AddHabits>
                <input placeholder='nome do hábito' />
                
                <WeekDays>
                <div><span>D</span></div>
                <div><span>S</span></div>
                <div><span>T</span></div>
                <div><span>Q</span></div>
                <div><span>Q</span></div>
                <div><span>S</span></div>
                <div><span>S</span></div>
                </WeekDays>

                <Buttons>
                    <ButtonCancel>
                        <span>Cancelar</span>
                    </ButtonCancel>
                    
                    <ButtonSave>
                        <span>Salvar</span>
                    </ButtonSave>
                </Buttons>
            </AddHabits>

            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </HabitsContainer>
        <Footer/>
        </>
    );
  }

const HabitsContainer = styled.div`
    max-width: 100%;
    height: calc(100vh - 98px);
    background-color: #E5E5E5;
    
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

const MyHabits = styled.div`
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

const AddHabits = styled.div`
    min-width: 85vw;
    height: 180px;
    margin-right: 5px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-sizing: border-box;

    input{
        margin-top: 18px;
        margin-left: 17px;
        width: 90%;
        height: 45px;
        padding-left: 11px;
        
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: Lexend Deca;
        font-size: 20px;
        line-height: 25px;
    }

    input::placeholder{
        color: #DBDBDB;
    }
`

const WeekDays = styled.div` 
    display: flex;
    margin-left: 17px;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        margin-top: 8px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
    }

    span{
        font-family: Lexend Deca;
        font-size: 20px;
        color: #DBDBDB;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-top: 29px;
    margin-right: 16px;
    justify-content: end;
`

const ButtonCancel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        font-family: Lexend Deca;
        font-size: 16px;
        text-align: center;
        color: #52B6FF;
    }
`

const ButtonSave = styled.div`
    width: 84px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 23px;
    background: #52B6FF;
    border-radius: 5px;

    span{
        font-family: Lexend Deca;
        font-size: 16px;
        color: #FFFFFF;
    }
`