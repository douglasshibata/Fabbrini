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
import { Button } from '@material-ui/core';

const ehMedico = localStorage.getItem('ehMedico');
export const mainListItems = (
  <div>
    <ListItem button>
      <Button href='/perfil'>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Meu Perfil" /></Button>
    </ListItem>
    {ehMedico === 'true' ?
      <><ListItem button>
        <Button href='/main'>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" /></Button>
      </ListItem>
        <ListItem button>
          <Button href='/pacientes'>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Pacientes" /></Button>
        </ListItem></> : <div></div>}
    <ListItem button>
      <Button href='/listaProfissionais'>
        <ListItemIcon>
          <LocalHospitalRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Profissionais" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='/agenda'>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Agenda" /></Button>
    </ListItem>
    {ehMedico === 'true' ?
      <>
        <ListItem button>
          <Button href='/prontuario'>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Prontuário" /></Button>
        </ListItem>
      </> : <div></div>}
    <ListItem button>
      <Button href='/about'>
        <ListItemIcon>
          <InfoRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Sobre" /></Button>
    </ListItem>
    <ListItem button>
      <Button href='/help'>
        <ListItemIcon>
          <HelpOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Ajuda" /></Button>
    </ListItem>
  </div>
);