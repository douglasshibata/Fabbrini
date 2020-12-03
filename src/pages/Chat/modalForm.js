import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
//import { logout } from '../../services/auth';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #00BCD4',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  buttonEnd:{
    width: '199.64px',
    height: '40.44px',
    left: '896.56px',
    top: '591.11px',
    background: '#FF5252',
  }
}));

export default function ModalForm() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  /* const handleLogout = e => {
    logout();
    window.location.href = '/';
  }; */
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="encerrar-consulta-title">Consulta Finalizada</h2>
      <p id="encerrar-consulta-description">
      Muito Obrigado Por se Consultar pelo Fabbrini
      </p>
      {/* <a href='/'><p  onClick={handleLogout} id="encerrar-consulta-description">
        Avalie a Consulta
      </p></a> */}
      <a href='/agenda'>
        <p>Voltar para a agenda</p>
      </a>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen} className={classes.buttonEnd}>
        Encerrar Consulta
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Encerrar Consulta"
        aria-describedby="Encerrar Consulta e ir para O Formulário"
      >
        {body}
      </Modal>
    </div>
  );
}
