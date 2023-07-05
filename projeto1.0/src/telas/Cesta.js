import React from 'react';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <> 
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>Detalhes da cesta</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome} >Cesta de verduras</Text>
        <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        <Text style ={estilos.descricao}>
            Uma cesta com produtos selecionados cuidadosamente
            da fazenda direto para sua cozinha
        </Text>
        <Text style = {estilos.preco}>R$ 40,00</Text>

    </View>

    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
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

    cesta: {
        /* Não existem no css tradicional, não podemos 
        passar mais de um parâmetro como no css Ex: padding: 4 10 10 8 */
        paddingVertical: 8, 
        paddingHorizontal: 16,
    },

    nome: {
        color: "#464646",
        fontSize: 26,

        // Tamanho da linha, define espaçamento em volta da linha 
        lineHeight: 42,

        // Texto em negrito
        fontWeight: "bold", 
    },

    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },

    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },

    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
}); 