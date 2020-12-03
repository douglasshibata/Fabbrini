import React from 'react';
//import Slogan from "../../assets/slogan.png";
import ImagemLateral from "../../assets/lado_inicial.jpeg";
//import Logo from "../../assets/logo.png";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Cadastro from "./cadastro.js";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${ImagemLateral})`,
    backgroundRepeat: 'no-repeat',
    //backgroundColor: 'white',
      //theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '100% 100%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text_login:{
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: 700,
    letterSpacing: '0em',
    textAlign: 'left',
    left: '876px',
    marginTop: '60px',
    marginBottom: '23px',
    color: '#000000',
  }
}));

export default function Register() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h4" variant="h5" className={classes.text_login}>
            Faça o seu Cadastro
          </Typography>
            <Cadastro/>
        </div>
      </Grid>
    </Grid>
  );
}