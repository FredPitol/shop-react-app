import React from 'react';
import { StyleSheet, Text } from 'react-native';

/* Função que recebe filhos e estilo de um componente 
e retorna texto formatado com a  folha 
de estilo desse componenente mais as estilizações que ele já possuía*/
export default function Texto({ children, style }){
    let estilo = estilos.texto;
    if (style?.fontWeight === 'bold'){
        estilo = estilo.textoNegrito;
    }
    return <Text style={[style, estilo]}>{ children }</Text>
}

// Folha de estilos
const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },

    textoNegrito: {
        fontFamily: "MontserratBold", 
        fontWeight: "normal",
    } 
})