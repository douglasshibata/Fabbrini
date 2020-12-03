import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import api from "../../services/api";
import { login } from '../../services/auth';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        const data = { cpfUser, email, password, nome }
        try {
            const response = await api.post('/user', data);
            login(response.data.token);
            alert('Cadastro Realizado com sucesso')
            history.push('/')
        } catch (error) {
            console.log(error.response.data);
            let mensagemErro = error.response.data.message;
            if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "password", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - null value in column "cpfUser" violates not-null constraint') { alert('CPF não pode estar em branco') }
            else if (mensagemErro === '"insert into "users" ("cpfUser", "created_at", "email", "nome", "password", "updated_at") values ($1, $2, $3, $4, $5, $6) returning "id" - duplicate key value violates unique constraint "users_cpfuser_unique"') { alert('CPF não pode estar em branco') }
            else if (mensagemErro === '"insert into "users" ("cpfUser", "created_at", "email", "nome", "password", "updated_at") values ($1, $2, $3, $4, $5, $6) returning "id" - duplicate key value violates unique constraint "users_email_unique"') { alert('Email já Cadastrado') }
            else if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "nome", "password", "updated_at") values ($1, $2, $3, $4, $5, $6) returning "id" - duplicate key value violates unique constraint "users_cpfuser_unique"') { alert('CPF já cadastrado') }
            else if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "password", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - null value in column "email" violates not-null constraint') { alert('Email não pode estar em branco') }
            else if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "password", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - null value in column "nome" violates not-null constraint') { alert('Nome não pode estar em Branco') }
            else if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "password", "updated_at") values ($1, $2, $3, $4, $5) returning "id" - null value in column "password" violates not-null constraint') { alert('Senha não pode estar em branco') }
            else if (mensagemErro === 'insert into "users" ("cpfUser", "created_at", "email", "nome", "password", "updated_at") values ($1, $2, $3, $4, $5, $6) returning "id" - duplicate key value violates unique constraint "users_email_unique"') { alert('Email já Cadastrado') }
        }

    }
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
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