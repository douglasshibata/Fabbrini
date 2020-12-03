import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import LandingPage from './pages/LandingPage';
import LoginAdmin from './pages/Admin/Login';
import MainAdmin from './pages/Admin/main';
import NavbarAdmin from './pages/Admin/Navbar';
import SignUpAdmin from './pages/Admin/SignUp';
import Agenda from './pages/Admin/Agenda';
import Pacientes from './pages/Admin/Paciente';
import Doctors from './pages/Admin/Doctors';
//Paciente
import LoginPaciente from './pages/Paciente/Login';
import RegisterPaciente from './pages/Paciente/Register';
import PerfilPaciente from './pages/Paciente/Perfil';
import NavBarPaciente from './pages/Paciente/Navbar';
import AgendaPaciente from './pages/Paciente/Agenda';
import ChatPaciente from './pages/Paciente/Chat';
//Doctor
import DoctorLogin from './pages/Doctor/Login';
import DoctorPerfil from './pages/Doctor/Perfil';
import DoctorRegister from './pages/Doctor/Register';
import DoctorNavBar from './pages/Doctor/Navbar';
import AgendaDoctor from './pages/Doctor/AgendaDoctor';

test('Teste App', () => {
 render(<App />);
});
test('Teste LandingPage', () => {
  render(<LandingPage />);
});
test('Teste Login Admin',()=>{
  render(<LoginAdmin/>);
});
test('Teste SignUp Admin',()=>{
  render(<SignUpAdmin/>);
});
test('Teste da Main Admin',()=>{
  render(<MainAdmin/>)
});
test('NavBar Admin',()=>{
  render(<NavbarAdmin/>)
});
test("Pacientes Admin",()=>{
  render(<Pacientes/>)
})
test("Paciente Login",()=>{
  render(<LoginPaciente/>)
})
test("Paciente Register",()=>{
  render(<RegisterPaciente/>)
});
test('Paciente Perfil',()=>{
  render(<PerfilPaciente/>)
});
test('NavBar Paciente',()=>{
  render(<NavBarPaciente/>)
})
test("Agenda Admin",()=>{
  render(<Agenda/>)
})
test("Agenda Paciente",()=>{
  render(<AgendaPaciente/>)
})
test("Chat Paciente",()=>{
  render(<ChatPaciente/>)
})
test("Doctor Login",()=>{
  render(<DoctorLogin/>)
});

test("Doctor Register",()=>{
  render(<DoctorRegister/>)
})
test("Doctor Perfil",()=>{
  render(<DoctorPerfil/>)
}) 
test('NavBar Doctor',()=>{
  render(<DoctorNavBar/>)
}) 
test("Doctor Admin",()=>{
  render(<Doctors/>)
});
test('Agenda Doctor',()=>{
  render(<AgendaDoctor/>)
})