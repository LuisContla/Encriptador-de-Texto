# Encriptador-de-Texto
Este proyecto es un encriptador de texto desarrollado en HTML, CSS y JavaScript que te permite encriptar y desencriptar cualquier texto que le proporciones. Además, puedes copiar el texto resultante al portapapeles con un solo clic.


## Funcionalidades

Este es un programa en que que podrás observar las siguientes funcionalidades.

- Ingresar Texto
- Encriptar Texto
- Desencriptar Texto
- Copiar Texto Resultante

### Ingresar Texto

El texto que se desea Encriptar o Desencriptar se coloca en el campo de texto, el cual se indica con el mensaje "Ingrese el texto aquí":

![Ingresar Texto](https://media.discordapp.net/attachments/635273333491105832/1270127459425320980/image.png?ex=66b291e0&is=66b14060&hm=40556c8e5c226d037d4263d6900d62ccb7bce261bbb5f4f1958ab26a148cac07&=&format=webp&quality=lossless&width=813&height=414)

Además, al inicio del programa, al no haber nungín texto encriptado o desencriptado, se muestra un mensaje en el cual se indica que no se ha encontrado ningún texto:

![No encontrado](https://media.discordapp.net/attachments/635273333491105832/1270128499369447505/image.png?ex=66b292d8&is=66b14158&hm=78b5114c74c6306d2cb3c1ec39f389d31ea8da8f4fd6b039e3ffa764a541973d&=&format=webp&quality=lossless&width=492&height=659)

### Encriptar Texto

Una vez ingresado el texto, para generar el texto encriptado se deberá seleccionar con el botón corrspondiente la opción. En este caso se deberá seleccionar el botón con el texto "Encriptar":

![Encriptar](https://media.discordapp.net/attachments/635273333491105832/1270127459425320980/image.png?ex=66b291e0&is=66b14060&hm=40556c8e5c226d037d4263d6900d62ccb7bce261bbb5f4f1958ab26a148cac07&=&format=webp&quality=lossless&width=813&height=414)

La manera en la que se enciptan los mensajes es la siguiente. En las instrucciones del Challenge, se indicaron las llaves de encriptación, las cuales son las siguientes:

```txt
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
```

Siguiendo esta indicación, utilicé la función replace() para cambiar todas las vocales con la llave de encriptación corrspondiente:

```javascript
let txtEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
```

Una vez finalizada la encriptación, se reemplazará el mensaje de "No encontrado" (o el texto actual), mostrado anteriormente por el texto encriptado:

![Encriptado](https://media.discordapp.net/attachments/635273333491105832/1270130017027887185/image.png?ex=66b29441&is=66b142c1&hm=f6553b4733fdc49a9e59aa371063e2326687b86e81937df13d72e57fb3ad1c82&=&format=webp&quality=lossless&width=644&height=522)

### Desencriptar Texto

De manera similar a la encriptación, se deberá de ingresar el texto que se desea Desencriptar y seleccionar el botón con el texto "Desencriptar":

![Desencriptar](https://media.discordapp.net/attachments/635273333491105832/1270128027703181393/image.png?ex=66b29267&is=66b140e7&hm=c7f2448916080e0a64d2a9618fc1abb44bd25db8d91170008bfa3ae5c086ba8c&=&format=webp&quality=lossless&width=463&height=85)

Tomando de base la función replace() que utilicé en la encriptación, de igual manera la utilicé en el desencriptado, invirtiendo las llaves de encriptación y las vocales:

```javascript
let txtEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
```
Una vez finalizada la desencriptación, se reemplazará el mensaje de "No encontrado" (o el texto actual), mostrado anteriormente por el texto desencriptado:

![Desencriptado](https://media.discordapp.net/attachments/635273333491105832/1270129891714535566/image.png?ex=66b29424&is=66b142a4&hm=889c54ed7b1aefb89c1308709c3b7353ea51af4928ab38b56ca917a0f74c78ef&=&format=webp&quality=lossless&width=651&height=385)

### Copiar Texto Resultante

Como se puede observar en las capturas anteriores, en el testo resultante se encuentra un botón con e texto "Copiar":

![Copiar](https://media.discordapp.net/attachments/635273333491105832/1270139241619525772/image.png?ex=66b29cd9&is=66b14b59&hm=69f253903f13331b5d7b758ea135a34b7912f2795839c099a37895e980adf965&=&format=webp&quality=lossless&width=574&height=139)

Al hacer clic se copiará el texto actual al portapapeles. Esto lo logré de la siguiente manera:

```javascript
const copiarContenido = async () => {
    // Obtengo el texto del text area del resultado
    let txtCopiar = document.getElementById('txt-res').textContent;
    try {
        await navigator.clipboard.writeText(txtCopiar);
        alert('Contenido copiado al portapapeles');
    } catch (err) {
        alert('Error al copiar: ', err);
    }
}
```
## Colores

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Fondo de página | ![#F3F5FC](https://via.placeholder.com/10/f3f5fC?text=+) #F3F5FC |
| Texto | ![#0A3871](https://via.placeholder.com/10/0a3871?text=+) #0A3871 |
| Texto Apagado | ![#495057](https://via.placeholder.com/10/495057?text=+) #495057 |
| Cuadro Resultante | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #FFFFFF |


## Autores

- [@LuisContla](https://github.com/LuisContla)

