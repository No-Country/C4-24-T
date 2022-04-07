import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginClientePage from './Page/LoginClientePage';
import RegistroClientesPage from './Page/RegistroClientesPage';
import Home from './Page/Home'
import Navbarview from './Components/Navbar/Navbarview';
import CategoriasRegistro from './Page/CategoriasRegistro';
import RegistroProfesionalpage from './Page/RegistroProfesionalpage';





function App() {
  return (
    <BrowserRouter>
    <Navbarview/>
      
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/logincliente' element={<LoginClientePage/>}/>
        <Route path='/registrocliente' element={<RegistroClientesPage/>}/>
        <Route path='/CategoriaRegistro' element={<CategoriasRegistro/>}/>
        <Route path='/registroprofesional' element={<RegistroProfesionalpage/>}/>
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
