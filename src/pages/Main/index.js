import React, { useEffect, useState } from 'react';
import { Grid, Container, Card, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Navbar';
import api from '../../services/api';
import { Skeleton } from '@material-ui/lab';
import { LineChart, Line } from 'recharts';
import ChatBot from '../Chatbot';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 100, pv: 1400, amt: 1400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 200, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 100, pv: 1400, amt: 1400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 200, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 100, pv: 1400, amt: 1400},{name: 'Page A', uv: 300, pv: 2400, amt: 2400},{name: 'Page A', uv: 200, pv: 2400, amt: 2400}];

const renderLineChart = (
    <LineChart width={300} height={200} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
  
const useStyles = makeStyles((theme) => ({

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    root: {
        maxWidth: 345,
        minWidth: 275,
    },
    media: {
        height: 140,
    },
    title: {
        fontSize: 14,
    },
}));

const Main = (props) => {
    const classes = useStyles();
    const [numeroDoctors, setNumeroDoctors] = useState('');
    const [totalPacientes, setTotalPacientes] = useState('');
    useEffect(() => {
        async function getDoctorActive() {
            try {
                const response = await api.get("/totalMedicos")
                setNumeroDoctors(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getDoctorActive();
    }, [])
    useEffect(() => {
        async function getTotalPacientes() {
            try {
                const response = await api.get("/totalPaciente")
                setTotalPacientes(response.data)
            } catch (error) {
                alert('Erro ao carregar os dados')
            }
        }
        getTotalPacientes();
    }, [])
    
    return (
        <>
            <Navbar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Profissionais       </Typography>
                                    <Typography variant="h1" component="h2"> {numeroDoctors}</Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       Pacientes  </Typography>
                                    <Typography variant="h1" component="h2"> {totalPacientes}    </Typography>

                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                       Atendimentos        </Typography>
                                    <Typography variant="h1" component="h2"> {renderLineChart}</Typography>
                                </CardContent>
                            </Card>


                        </Grid>
                        <Grid item xs={12} sm={6}>

                      
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    <Skeleton variant="circle" width={150} height={150} /></Typography>
                      

                        </Grid>
                    </Grid>
                </Container>
            </main>
            <ChatBot/>
        </>
    );
};

export default Main;