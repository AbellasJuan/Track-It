import styled from "styled-components";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteHabit } from "../service/API.js";
import UserContext from "../Context/UserContext.js";
import { useContext } from "react";
import Swal from "sweetalert2";

export default function UnicoHabito({ habits, setHabits }) {

    const { user } = useContext(UserContext);
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    return (
        <>
            {habits.map((habit, index) => 
            <Habit
                habits={habits}
                setHabits={setHabits}
                weekdays={weekdays}
                user={user}
                deleteHabit={deleteHabit}
                name={habit.name}
                selectedDays={habit.days}
                key={index} id={habit.id}
                check={index}/>)}

        </>
    );
}

function Habit ({ habits, setHabits, weekdays, user, deleteHabit, name, selectedDays, id, check}) {

    function deleteConfirmation() {
        Swal.fire({
            title: 'Deseja excluir o hábito?',
            text: 'Não será possível reverter esta ação',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
          }).then((result) => {
            if (result.isConfirmed) {
                let removed = habits.indexOf(habits[check]);
                habits.splice(removed, 1);
                setHabits([...habits]);
                deleteHabit(user.token, id)
                    .then(() =>
                    Swal.fire(
                        'Sucesso!',
                        'Este hábito foi removido com sucesso',
                        'success'
                      ));
            }
          })
    }

    return(
        <HabitDescription key={id}>
            <TitleAndTrashed>
            <h1>{name}</h1>
            <RiDeleteBin6Line onClick={deleteConfirmation} />
            </TitleAndTrashed>
            
            <WeekDays>
                {weekdays.map((weekday, index) =>
            <WeekDay
                weekday={weekday}
                key={index}
                check={index}
                selectedDays={selectedDays}/>)}
            </WeekDays>

            
        </HabitDescription >
    )
};

function WeekDay({ weekday, check, selectedDays }) {
    return (
        <Day selected={selectedDays.indexOf(check) !== -1} >{weekday}</Day>
    );
}

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

const WeekDays = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 17px;
    padding-top: 8px;
`;

const Day = styled.button`
    width: 30px;
    height: 30px;
    border: ${props => props.selected ? '1px solid #cfcfcf' : '1px solid #d4d4d4'};
    border-radius: 5px;
    font-family: Lexend Deca;
    font-size: 20px;
    color: ${props => props.selected ? '#ffffff' : '#dbdbdb'};
    background-color: ${props => props.selected ? '#cfcfcf' : '#ffffff'};
    margin-right: 5px;
`;