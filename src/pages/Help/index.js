import React from 'react';
import { Container,Grid } from '@material-ui/core';
import Navbar from '../Navbar';
import ChatBot from '../Chatbot';


export default function Help() {

    return (
        <>
            <Navbar />
            <Container>
            <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1 style={{ margin: "20px 0", color: "#00BCD4" }}>FAQ</h1>
          </Grid>
          <Grid item xs={12}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta nam esse, consectetur magni aliquid quod in dolor. Quidem consequuntur voluptates consectetur iure culpa aperiam autem dignissimos. Iusto sunt mollitia repellendus!</p>
          </Grid>
        </Grid>
            </Container>
            <ChatBot/>
        </>
    );
}


