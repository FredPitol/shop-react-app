import React from "react";
import { Image, StyleSheet, Dimensions } from 'react-native';

//Import do componente Texto e da imagem utilizada
import Texto from '../../../componentes/Texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo() {
    return <>
    
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>Detalhes da cesta</Texto>
    </>
}
  
const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
        paddingHorizontal: 0,
    },

    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize : 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold", 
        padding: 30
    },  
})