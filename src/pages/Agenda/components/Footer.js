import React from 'react';
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale";
import {
    Text,
    StyleSheet,
    View,
    Link
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        '@media max-width: 400': {
            flexDirection: 'column',
        },
    },
    footer: {
        fontSize: 12,
        textAlign: 'center',
        paddingTop: 10,
    },
    link: {
        fontSize: 10,
        color: 'black',
        textDecoration: 'none',
        alignSelf: 'flex-end',
    },
});

function Footer() {
    const dataAtual = new Date()
    const formattedDate = format(
        dataAtual,
        "'Dia' dd 'de' MMMM', às ' HH:mm'h'", { locale: ptBR }
      )
    return (
        <View style={styles.container}>
            <Text style={styles.footer}>Criado em {formattedDate}</Text>
            <Link style={styles.link} to='https://fabbrini.herokuapp.com/'>https://fabbrini.herokuapp.com/</Link>
        </View>
    );
}
export default Footer;


