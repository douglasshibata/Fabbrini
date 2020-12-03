import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing(1),
        position: 'relative',
    },
}));
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://fabbrini.herokuapp.com/">
                Fabbrini
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default function CircularIntegration() {
    const classes = useStyles();

    return (
        <Container>
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        <ErrorIcon htmlColor='red' />Página Inexistente <ErrorIcon htmlColor='red' />
                    </Typography>
                    <Avatar color='red'>
                        <WarningIcon htmlColor='yellow' />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <ErrorIcon htmlColor='red' />Página Não encontrada<ErrorIcon htmlColor='red' />
                    </Typography>
                    <Link to='/'>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color='secondary'
                            className={classes.submit}
                        >
                            Ir para a página de Login
        </Button>
                    </Link>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
        </Container>
    );
}


