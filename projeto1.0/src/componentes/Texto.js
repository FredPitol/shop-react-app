import React from 'react';
import { StyleSheet, Text } from 'react-native';

/* Função que recebe filhos e estilo de um componente 
e retorna texto formatado com a  folha 
de estilo desse componenente mais as estilizações que ele já possuía*/
export default function Texto({ children, style }){
    let estilo = estilos.texto;
    
    // style? -> Checa se o elemento possui fontWeight
    // ? -> Previne erro em elementos que não tem valor de style atribuido 
    //fazendo a checagem  
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
        // Fontes bold não podem ser aplicadas em elementos com fontWeght: bold
        fontFamily: "MontserratBold",
        // Precisamos setar essa config em fontes que já são em bold 
        fontWeight: "normal",
    } 
})