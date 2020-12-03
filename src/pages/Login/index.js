import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import api from "../../services/api";
import { useHistory } from 'react-router-dom';
import { login } from '../../services/auth';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    inputCPF: {
        width: '100%',
        height: '50px',
        left: '819px',
        top: '334px',
        border: '1px solid #C4C4C4',
    }
}));

export default function SignIn() {
    const classes = useStyles();
    const [cpfUser, setCpfUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    localStorage.setItem('cpfUser', cpfUser);

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfUser, password }
        try {
            const response = await api.post('/sessions', data);
            login(response.data.token);
            history.push('/perfil')
        } catch (error) {
            if (error.response.data[0].field === 'cpfUser') {
                alert('CPF não encontrado')
            } else if (error.response.data[0].field === 'password') alert('Senha inválida')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='CPF*' minLength='11' maxLength='11' required
                    value={cpfUser}
                    onChange={e => setCpfUser(e.target.value)}
                    className={classes.inputCPF}
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

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Entrar
          </Button>
                <Grid container>
                    <Grid item>
                        <Link to="/cadastrar" variant="body2" className={classes.link}>
                            Clique aqui para se Cadastrar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}