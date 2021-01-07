import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

const ehMedico = localStorage.getItem('ehMedico');
export const mainListItems = (
  <div>
    <ListItem button>
      <Link to='/perfil'>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Meu Perfil" /></Link>
    </ListItem>
    {ehMedico === 'true' ?
      <><ListItem button>
        <Link to='/main'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" /></Link>
      </ListItem>
        <ListItem button>
          <Link to='/pacientes'>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Pacientes" /></Link>
        </ListItem></> : <div></div>}
    <ListItem button>
      <Link to='/listaProfissionais'>
        <ListItemIcon>
          <LocalHospitalRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Profissionais" /></Link>
    </ListItem>
    <ListItem button>
      <Link to='/agenda'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Agenda" /></Link>
    </ListItem>
    {ehMedico === 'true' ?
      <>
        <ListItem button>
          <Link to='/prontuario'>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Prontuário" /></Link>
        </ListItem>
      </> : <div></div>}
    <ListItem button>
      <Link to='/about'>
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre" /></Link>
    </ListItem>
    <ListItem button>
      <Link to='/help'>
        <ListItemIcon>
          <HelpOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Ajuda" /></Link>
    </ListItem>
  </div>
);