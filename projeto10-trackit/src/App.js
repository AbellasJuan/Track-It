import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login/Login.js';
import Cadastro from './Cadastro/Cadastro.js';
import Habitos from './Habitos/Habitos.js';
import MeusHabitosHoje from './Hoje/MeusHabitosHoje.js';
import Historico from './Historico/Historico.js'; 

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/habitos' element={<Habitos/>}/>
    <Route path='/hoje' element={<MeusHabitosHoje/>}/>
    <Route path='/historico' element={<Historico/>}/>
    </Routes>
  </BrowserRouter>
  );
}