import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from '../../services/api';
import { Link, useHistory } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Alert } from '@material-ui/lab';
import logo from '../../assets/logo.png'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        width: '100%',
        height: '100%',
        margin:'auto'
    },
    link: {
        width: '191px',
        height: '21px',
        left: '859px',
        top: '509px',
        fontSamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 300,
        fontSize: '18px',
        lineHeight: '21px',
        color: '#0071BC',
    },
}));

export default function ResetPassword(props) {
    const classes = useStyles();
    const [tokenResetSenha, setToken] = useState(props.match.params.token);
    const [senha, setsenha] = useState('');
    const [confirmsenha, setConfirmsenha] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setToken(props.match.params.token)
        const data = { tokenResetSenha, senha }
        try {
            setLoading(true)

            if (senha === confirmsenha) {
                await api.post('/reset-password', data);
                setLoading(false)
                alert('Senha Atualizada com sucesso')
                history.push('/')
            } else {
                setLoading(false)
                setError('Senhas Não conferem')
                alert('Senhas Não conferem')
            }
        } catch (error) {
            setLoading(false)
            console.log(error.response.data);
            if (error.response.data.message) {
                let mensagemErro = error.response.data.message.error;
                setError(mensagemErro)
                alert(mensagemErro)
            }
            if(error.response.data.error){
                let mensagemErro = error.response.data.error.message;
                setError(mensagemErro)
                alert(mensagemErro)

            }
        }

    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <img src={logo} alt="logo" className={classes.logo} />
                <Typography component="h1" variant="h5">
                    Redefinir a senha
        </Typography>
                {error &&
                    <Alert severity="error">
                        {error}
                    </Alert>}
                {loading ? <ReactLoading type={'spin'} color={'#123'} height={'20%'} width={'20%'} /> : <></>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="senha"
                        label="Senha"
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={e => setsenha(e.target.value)}
                        autoComplete="current-senha"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="Confirmsenha"
                        label="Confirme a Senha"
                        type="password"
                        id="Confirmsenha"
                        value={confirmsenha}
                        onChange={e => setConfirmsenha(e.target.value)}
                        autoComplete="current-senha"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Atualizar
          </Button>
          <Grid container>
                        <Grid item>
                            <Link to="/" variant="body2" className={classes.link}>
                                Faça o seu login
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}