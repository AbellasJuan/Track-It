import styled from "styled-components";
import { BsCheckSquareFill } from 'react-icons/bs';
import { useState } from "react";

export default function HabitoHoje({ user, id, name, status, habitCurrent, habitRecord, toggleHabit }){

    const [done, setDone] = useState(status);
    const [current, setCurrent] = useState(habitCurrent);
    const [record, setRecord] = useState(habitRecord);

    function check() {
        if (current === record) {
            setRecord(record + 1);
        }
        setCurrent(current + 1);
    }

    function uncheck() {
        setCurrent(current - 1);
        setRecord(record - 1);
    }

    function toggleStatus() {
        if (!done) {
            toggleHabit(user.token, id, 'check');
            setDone(1);
            check();
        } else {
            toggleHabit(user.token, id, 'uncheck');
            setDone(0);
            uncheck();
        }
    }
    
    return(
        <TodayHabit>
            <h1>{name}</h1>
            
            <Sequence state={done ? 1 : 0}>
                <h2>Sequencia atual:&nbsp;</h2> {current} {current > 1 ? 'dias' : 'dia'} 
            </Sequence>
            
            <Record state={current === record && record !== 0 ? 1 : 0}>
                <h2>Seu recorde:&nbsp;</h2> {record} {record > 1 ? 'dias' : 'dia'}
            </Record>

            <CheckButton state={done} onClick={toggleStatus} ><BsCheckSquareFill/></CheckButton>
        </TodayHabit>
    )
};

const Sequence = styled.span`
    display: flex;
    font-size: 13px;
    color: ${props => props.state ? '#8fc549' : '#666666'};
    padding-top: 7px;
    font-family: Lexend Deca;

    h2{
        color:#666666;
    }    
`

const Record = styled.span`
    font-size: 13px;
    color: ${props => props.state ? '#8fc549' : '#666666'};
    padding-top: 3px;
    font-family: Lexend Deca;
    display: flex;

    h2{
        color:#666666;
    }
`

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
    word-break: break-all;

    h1{
        padding-right: 80px;
        font-family: Lexend Deca;
        font-size: 20px;
        color: #666666;
    }
`

const CheckButton = styled.div`
    width: auto;
    height: 69px;
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 69px;
    color: ${props => props.state ? '#8fc549' : '#ebebeb'};
`;