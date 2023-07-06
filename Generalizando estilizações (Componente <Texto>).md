Criar um componente que substituirá a tag `<Text></Text>`, adicionando uma estilização padrão a todos elementos de texto da aplicação

## Criar arquivos
1. Criar uma pasta chamada `componentes` dentro da pasta `src`
2. Criar um novo arquivo dentro dessa pasta com o nome desejado do componente `Texto.js`

## Fazer os imports necessários
### Import no componente 
```javascript
import React from 'react';

import { Text } from 'react-native';
```

### Import no componente destino 
```javascript
import Texto from '../componentes/Texto';
```

- Retire qualquer fontFamily adicionado anteriormente na folha de estilo do componente destino

## Criar uma função padrão com os filhos dos componente como argumento 
```javascript
export default function Texto({ children, style }){

let estilo = estilos.texto;

if (style?.fontWeight === 'bold'){
	estilo = estilo.textoNegrito;
}
```
> Função padrão que recebe os filhos e estilos do componente, atribui o estilo `texto` a uma variável , se ele possuir um estilo já atribuído e  possuir `fontWeight`  igual a `'bold'`  atribui o estilo `textoNegrito`

- `style?` -> Checa se o elemento possui algum estilo caso não tenha a condicional é ignorada
	- Previne erro em elementos que não tem valor de style atribuído

## Retornar um array com as duas folhas de estilo 
```javascript
return <Text style={[style, estilo]}>{ children }</Text>
```
>enviar os filhos dentro de um componente `</Text>` que tem `style` igual a um array que armazena a variável que recebe a folha de estilo deste componente e a folha de estilo do componente importado

- Adicionamos esses estilos ao componentes `<Text>` dentro da função através de um array que possui os estilos do componente `<Texto>` e os que serão recebidos através da função
-  No javascript um array é feito através de `[]`

## Folha de estilo 
```javascript
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
```
> Cria folha de estilos, cada estilo atribui um fonte diferente e atribui fontWeight normal para prevenções de erro 

- Fontes bold não podem ser aplicadas em elementos com fontWeght: bold
	- Precisamos setar essa config em `textoNegrito` para que essa config esteja em normal quando for setada 
- Temos a mesma questão com estilo `texto` porem nesse caso é para  quando o `fontWeight` estiver setado para algum tamanho especifico Ex: fontWeight: 600





