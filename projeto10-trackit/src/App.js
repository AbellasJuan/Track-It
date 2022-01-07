import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login/Login.js';
import Cadastro from './Cadastro/Cadastro.js';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
  </BrowserRouter>
  );
}