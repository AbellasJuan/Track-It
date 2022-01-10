import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import UserContext from './Context/UserContext.js'
import Login from './Login/Login.js';
import Cadastro from './Cadastro/Cadastro.js';
import Habitos from './Habitos/Habitos.js';
import MeusHabitosHoje from './Hoje/MeusHabitosHoje.js';
import Historico from './Historico/Historico.js'; 
import GlobalStyle from '../src/globalStyles.js';

export default function App() {

  const [user, setUser] = useState(null);
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <UserContext.Provider value={{user, todayHabits, setTodayHabits}}>
      <BrowserRouter>
      <GlobalStyle />
        <Routes>
        
        <Route path='/' element={<Login setUser={setUser}/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/habitos' element={<Habitos/>}/>
        <Route path='/hoje' element={<MeusHabitosHoje/>}/>
        <Route path='/historico' element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}