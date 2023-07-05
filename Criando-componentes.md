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
- Pode abrir e fechar em uma assinatura, e ser atribuído alguma propriedade como em ```<StatusBar/>```
- As tags são componentes 

# Organizando hierarquia de arquivos 

1. Criamos umas pasta src, que irá armazenar os nosso arquivos, nesse caso os dos componentes que iremos criar 
2. Criar uma pasta telas 
3. Dentro de telas criamos um arquivo ```Cesta.js```
4. Fazemos a importação do react:  ```import React from "react";```
5. Importação do arquivo para permitir o acesso a ele 
	1. ```import { Text } from 'react-native';```
	2. ```export default function Cesta(){}```
6. Retornamos o código que queremos mostrar
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
```javascript
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
	-  ```import { StatusBar, StyleSheet, Text, View } from 'react-native';```
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

# Mudando ordenação de componentes para adicionar imagem de logo antes de texto

1. Agrupar em outra view para que as mudanças não afetem a ordenação de outros componentes agrupando esses elementos dentro de uma ```<View></View>```
2. Fazer o import da imagem ```import logo from '../../assets/logo.png';```
3. Adicionar ela dentro da view  ```<Image source={logo} />```
4. Criar 3 estilizações para o nome da fazenda, fazenda(será adicionando na view) e a imagem da fazenda

```javascript
imagemFazenda: {
	width: 32,
	height: 32,
},

// # Mudando ordenação de componentes para adicionar imagem de logo antes de texto
fazenda : {
	flexDirection: "row",
	paddingVertical: 12,
},

nomeFazenda: {
	fontSize: 16,
	lineHeight: 26,
	marginLeft: 12,
},
```
- FlexDirection permite que os elementos sejam organizados, por padrão no react ele é column, como queremos que nossos elementos se organizem em linha, usamos ``` "row" ```para isso 
- Caso fosse feito direto no css, é necessário declarar que o elemento é flex
	- ```display: flex```
	- No react todos os elementos já possuem essa propriedade por padrão 

# Adicionando fontes externas 

A documentação do expo possui uma seção sobre adição de fontes direto do google fonts, será utilizado essa solução
https://docs.expo.dev/develop/user-interface/fonts/#use-a-google-font

1. No terminal dentro da pasta do projeto, instale a fonte executando o seguinte comando 
```bash
npx expo install expo-font @expo-google-fonts/montserrat
```
> Modificar a ultima palavra ( `montserrat` ) para o nome da fonte desejada 

2. Importamos a classe `useFonts` e os objetos das fontes que queremos importar no arquivo `app.js`
```javascript
import {useFonts,
//Objetos fontes
Montserrat_400Regular,
Montserrat_700Bold,
Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';
```
> Temos que adicionar os nomes específicos de cada fonte que correspondem a o objeto daquela fonte.

3. Dentro  do nossa função padrão de retorno (`export default function App() {}`)Criamos uma variável para o armazenamento da fonte que recebe uma função que tem como parâmetro objetos de fonte

```javascript
const [fonteCarregada] = useFonts({
"MontserratRegular": Montserrat_400Regular,
"MontserratBold": Montserrat_700Bold,
})
```
>`"MontserratRegular"` se refere a nomeação do atributo que iremos adicionar a estilização do elemento.

4. Criar uma condicional que faça com que nossa aplicação não carregue caso as fontes não sejam carregadas
```javascript
if (!fonteCarregada){
return <View />
}
```
5. Aplicar fonte ao texto utilizando a nomeação escolhida nos passos anteriores
```javascript
nomeFazenda: {
	fontFamily: "MontserratRegular",
},
```
-  Caso não seja carregado automaticamente, finalize a aplicação via terminal e inicia novamente
-  Em fontes que já são bold, delete qualquer configuração de peso Ex: (`fontWeight: "bold",`)

## É possível que a fonte não carregue?
- Quando instalamos a nova fonte (1ª etapa) todos os arquivos `.ttf` são importados para a pasta `node_modules` do projeto, dessa forma, mesmo que o usuário não tenha internet na hora do acesso esses arquivos serão carregados 
