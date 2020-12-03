import React from 'react';
import logo from '../../../assets/logo.png'

import {   StyleSheet, Image } from '@react-pdf/renderer'

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '20%',
    },
 
});
function Header() {
    return (
        <>
                <Image source={logo} style={styles.image} />
        </>
    );
}
export default Header