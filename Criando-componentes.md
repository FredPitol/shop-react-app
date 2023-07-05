# Arquivo App.js

```xml
export default function App() {
		return (
		<View style={styles.container}>
			<Text>Orfeu bar</Text>
			<StatusBar style="auto" />
		</View>
	);
}
```
>Retorna uma função que se chama App( ) 

## Dentro da função 
```xml
	<View style={styles.container}>
			<Text>Orfeu bar</Text>
			<StatusBar style="auto" />
		</View>
```

### Tags 
- podem abrir e fechar como a ```<View...> </View>``` 
- Pode abrir e fechar em uma assinatura, e ser atribuido alguma propriedade como em ```<StatusBar/>```
- As tags já são componentes 

# Organizando hierarquia de arquivos 

1. Criamos umas pasta src, que irá armazenar os nosso arquivos, nesse caso os dos componentes que iremos criar 
2. Criar uma pasta telas 
3. Dentro de telas criamos um arquivo ```Cesta.js```
4. Fazemos a importação do react:  ```import React from "react";```
5. Importação do arquivo para permitir o acesso a ele 
	1. ```import { Text } from 'react-native';```
	2. ```export default function Cesta(){}
6. Retornamos o código que queremos mostra
	1. ```return <Text>Cesta</Text>```

```javascript
import React from 'react';
import { Text } from 'react-native';

export default function Cesta() {
	return <Text>Cesta</Text>
}
```

# Estilizando 
1. Deletamos a pré estilização presente ``` App.js```
```
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
```
2. Vamos usar uma status bar diferente da que vem no expo para isso:
	1. Deletamos a tag da status bar ```<StatusBar style="auto" />```
	2. E deletamos sua importação ``` import { StatusBar } from 'expo-status-bar';```
3. Adicionar status bar a importação de elementos do react 
	-  ```import { StatusBar, StyleSheet, Text, View } from 'react-native';``
4. Adicionar safe area view (Status bar do ios)	

## ```StatusBar``` 
- Componente da biblioteca do react native que funciona como um respiro para a status bar dos telefones android
![[Screenshot 2023-07-03 at 03.16.31.png]]
- entra fechado na primeira linha do return 

## ```SafeAreaView```
- Componente do react 
- Respiro para barras de sistema do IOS
- Abre e fecha o código do return incluindo a StatusBar do android 
![[Screenshot 2023-07-03 at 03.22.57.png]]

# Adicionando imagem 
1. No componente em que queremos adicionar a imagem 
2. Adicione ```Image``` na lista de importações do react native 
3. Vamos importar a imagem usando a variável ```topo``` para receber esse imagem
4. Com a tag ```Image``` e o atributo ```source ```para receber o nome da variável
5. 

```javascript
import React from 'react';

// Import na biblioteca react 
import { Image } from 'react-native';

// como o elemento ../ voltamos uma pasta
// Import da imagem para dentro da var topo
import topo from '../../assets/topo.png';

export default function Cesta() {
return <Image source={topo} />

}
```

## Estilizando imagem 
```javascript
import React from 'react';

import { StyleSheet, Image, Dimensions } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
	return <Image source={topo} style={estilos.topo} />

}

const estilos = StyleSheet.create({

	topo: {
		width: "100%",
		height: 578 / 768 * width,
	}

});
```

- Temos os devidos imports 
- A variável constante ```width``` recebe as dimensões da tela na qual o programa está sendo visualizado

### `const width = Dimensions.get('screen').width;`
- Usamos o metodo `get` da classe `Dimensions` do pacote `react-native` passando o argumento `screen`
	- Isso retorna um objeto que contem várias informações sobre as dimensões da tela 
		- No nosso caso escolhemos a informação `.width`
		

### `style={estilos.topo}`
- adicionamos a constante `estilo` e sua tag `topo` para adicionar as estilizações 

### `const estilos =StyleSheet.create({});`
- Usamos a função `create({})` da classe `Stylesheet` para criar a nossa folha de estilo

### `topo: {}
- Identificação para ser adicionado nas tags do return como argumento

### `height: 578 / 768 * width,`
- altura da foto utilizada dividido por sua largura vezes a largura da tela que está sendo exibido o programa 
- Dessa forma a altura da imagem sempre será proporcional a tela de exibição ![[Screenshot 2023-07-03 at 04.15.58.png]]

# Adicionando novos elementos
Não podemos adicionar um novo elemento já que não podemos retornar mais do que um elemento.
Para isso precisaremos adicionar um fragmento

## Fragmentos 
- Agrupa e organiza os elementos 
- Sintaxe:
```javascript
export default function Cesta() {

return <>

	<Image source={topo} style={estilos.topo} />
	<Text>Teste de texto</Text>

</>
}
```
> `<>` Depois do return com o fechamento `</>` depois da adição dos elementos 

# Adicionando diferentes folhas de estilo 
```javascript
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
}

});
```

### Chamando ids nas tags 

### `style={NomeDaVariavel.Id}`

```javascript
<Image source={topo} style={estilos.topo} />

<Text style={estilos.titulo}>Detalhes da cesta</Text>
```

# Adicionando uma nova view com margem em todos os elementos dela 

1. Importamos a view 
2. Adicionamos a view após o nosso cabeçalho
3. Essa tag view irá agregar todas outras tags com informação
4. Adicionamos as seguintes estilizações 

```javascript
cesta: {
	paddingVertical: 8,
	paddingHorizontal: 16,
},
```
> Essas estilizações não existem no css tradicional, no react não podemos
passar mais de um parâmetro como no css Ex: padding: 4 10 10 8 , como nesse caso queremos adicionar padding em ambas direções, essa estilização funciona perfeitamente 

# Mudando 
