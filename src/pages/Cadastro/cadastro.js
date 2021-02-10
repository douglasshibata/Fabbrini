import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import api from "../../services/api";
import { login } from '../../services/auth';
import { Alert } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import ReactLoading from 'react-loading';

const useStyles = makeStyles((theme) => ({
    paper: {
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

export default function Cadastro() {
    const classes = useStyles();
    const [cpfUser, setCpfUser] = useState('');
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [telefone, setTelefone] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfUser, email, password, nome, telefone }
        try {
            setLoading(true)
            if (password === confirmPassword) {
                const response = await api.post('/user', data);
                login(response.data.token);
                setLoading(false)
                alert('Cadastro Realizado com sucesso')
                history.push('/')
            } else {
                setLoading(false)
                setError('Senhas Não conferem')
            }
        } catch (error) {
            setLoading(false)
            console.log(error.response.data);
            console.log(error.response.data.message);
            if (error.response.data.message) {
                let mensagemErro = error.response.data.message.error;
                setError(mensagemErro)
                alert(mensagemErro)
            }
        }

    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                {error &&
                    <Alert severity="error">
                        {error}
                    </Alert>}
                {loading ? <ReactLoading type={'spin'} color={'#123'} height={'20%'} width={'20%'} /> : <></>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        label='CPF'
                        placeholder='CPF*' minLength='11' maxLength='11' required
                        value={cpfUser}
                        onChange={e => setCpfUser(e.target.value)} autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type='email'
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type='text'
                        required
                        fullWidth
                        id="nome"
                        label="Nome"
                        name="nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="telefone"
                        label="Telefone"
                        type="text"
                        maxLength='15' 
                        id="telefone"
                        onChange={e => setTelefone(e.target.value)}
                        value={telefone}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="ConfirmPassword"
                        label="Confirme a Senha"
                        type="password"
                        id="ConfirmPassword"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Cadastre-se
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