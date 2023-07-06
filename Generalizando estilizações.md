Criar um componente que substituirá a tag `<Text></Text>`, adicionando uma estilização padrão a todos elementos de texto da aplicação

1. Criamos uma pasta chamada `componentes` dentro da pasta `src`
2. Criar um novo arquivo dentro dessa pasta com o nome desejado do componente `Texto.js`
3. Fazer os imports necessários
```javascript
import React from 'react';

import { Text } from 'react-native';
```

4. Criar função padrão com os filhos do componente como argumento 
5. No retorno enviar os filhos dentro de um componente `</Text>`
```javascript

export default function( children ){
	return <Text>{ children }</Text>
}
```

6. Adicionamos como argumento também os estilos já presentes do componente que irá entrar nessa função 
```javascript
export default function( children, style ){}
```

7. Adicionamos esses estilos ao componentes `<Text>` dentro da função através de um array que possui os estilos do componente `<Texto>` e os que serão recebidos através da função
```javascript
return <Text style={[style, estilos.texto]}>{ children }</Text>
```
> No javascript um array é feito através de `[]`

8. Estilizamos da forma que desejamos e adicionamos o estilo ao componente text

```javascript
export default function( children ){
	return <Text style={estilos.texto}>{ children }</Text>
}
const estilos = StyleSheet.create({
texto: {
fontFamily: "MontserratRegular"
	}
})
```

9. Importamos nosso novo componente dentro do arquivo que iremos usar o nosso novo componente  `<Texto />` que irá adicionar nossas estilizações em todo elemento no qual ele for adicionado 
10. 
