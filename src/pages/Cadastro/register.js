import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link, useHistory } from 'react-router-dom';
import api from "../../services/api";
import { login } from '../../services/auth';
import { Alert } from '@material-ui/lab';
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@material-ui/core';
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
    const [cpfNumber, setcpfNumber] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [senha, setsenha] = useState('');
    const [confirmsenha, setConfirmsenha] = useState('');
    const [telefones, setTelefones] = useState([]);
    const [telefoneNumero, setTelefoneNumero] = useState('');
    const [telefoneTipo, setTelefoneTipo] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [ehMedico, setEhMedico] = useState(false)
    const [ativo, setAtivo] = useState(false)
    const history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        setTelefones({
            numero:telefoneNumero,
            tipo:telefoneTipo,
        })
        setAtivo(true)
        const data = { cpfNumber, email, senha, firstName,familyName, telefones,ehMedico,ativo }
        try {
            setLoading(true)
            setEhMedico(false)
            if (senha === confirmsenha) {
                const response = await api.post('/user', data);
                login(response.data.token);
                setLoading(false)
                alert('Cadastro Realizado com sucesso')
                history.push('/')
            } else {
                setLoading(false)
                setError('Senhas Não conferem')
                alert('Senhas Não conferem')
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
                {loading ? <ReactLoading type={'spin'} color={'#123'}  height={'20%'} width={'20%'} /> : <></>}
                <form className={classes.form} onSubmit={handleSubmit}>
                    <TextField
                        type="text"
                        variant="outlined"
                        fullWidth
                        label='CPF'
                        placeholder='CPF*'
                        inputProps={{ minLength:11 ,maxLength:11 }}
                         required
                        value={cpfNumber}
                        onChange={e => setcpfNumber(e.target.value)} autoFocus
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
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        type='text'
                        required
                        fullWidth
                        id="sobrenome"
                        label="Sobrenome"
                        name="sobrenome"
                        value={familyName}
                        onChange={e => setFamilyName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="telefone"
                        label="Telefone"
                        type="text"
                        inputProps={{ maxLength:15 }}
                        id="telefones"
                        onChange={e => setTelefoneNumero(e.target.value)}
                        value={telefoneNumero}
                    />
                    <FormControl style={{ minWidth:'100%',margin:'auto'}}>
                    <InputLabel id='telefoneTipoLabel'>Tipo de Telefone</InputLabel>
                    <Select  variant="outlined" autoWidth  labelId='telefoneTipoLabel' id='telefoneTipo' value={telefoneTipo} onChange={e=>setTelefoneTipo(e.target.value)}>
                        <MenuItem value={'residencial'}>Residencial</MenuItem>
                        <MenuItem value={'comercial'}>Comercial</MenuItem>
                        <MenuItem value={'celular'}>Celular</MenuItem>
                        <MenuItem value={'whatsapp'}>Whatsapp</MenuItem>
                    </Select>
                    </FormControl>
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