import React from 'react';
import { StyleSheet, View } from 'react-native';

import Topo from './topo';
import Detalhes from './detalhes';

export default function Cesta() {
    return <> 
        <Topo />
        <View style={estilos.cesta}>  
               <Detalhes />         
        </View>
    </>
}

const estilos = StyleSheet.create({

    cesta: {
        /* Não existem no css tradicional, não podemos 
        passar mais de um parâmetro como no css Ex: padding: 4 10 10 8 */
        paddingVertical: 8, 
        paddingHorizontal: 16,
    },

    
}); 