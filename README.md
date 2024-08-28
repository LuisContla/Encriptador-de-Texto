# Encriptador-de-Texto
Este proyecto es un encriptador de texto desarrollado en HTML, CSS y JavaScript que te permite encriptar y desencriptar cualquier texto que le proporciones. Además, puedes copiar el texto resultante al portapapeles con un solo clic. Puedes ver el protecto en: https://encriptador-de-texto-beryl.vercel.app/

## Funcionalidades

Este es un programa en que que podrás observar las siguientes funcionalidades.

- Ingresar Texto
- Encriptar Texto
- Desencriptar Texto
- Copiar Texto Resultante

### Ingresar Texto

El texto que se desea Encriptar o Desencriptar se coloca en el campo de texto, el cual se indica con el mensaje "Ingrese el texto aquí":

![Ingresar Texto](https://github.com/user-attachments/assets/97b5117c-01d0-4625-865a-a313c5f3eaf6)

Además, al inicio del programa, al no haber nungín texto encriptado o desencriptado, se muestra un mensaje en el cual se indica que no se ha encontrado ningún texto:

![NoEncontrado](https://github.com/user-attachments/assets/bdad32fd-9416-48e7-9442-3fd1e088b314)

### Encriptar Texto

Una vez ingresado el texto, para generar el texto encriptado se deberá seleccionar con el botón corrspondiente la opción. En este caso se deberá seleccionar el botón con el texto "Encriptar":

![Encriptar](https://github.com/user-attachments/assets/4882a976-e1e9-473d-ba31-c888f2f9d439)

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

![Encriptado](https://github.com/user-attachments/assets/3ec06833-ae9c-4fe6-81f7-b3049531f907)

### Desencriptar Texto

De manera similar a la encriptación, se deberá de ingresar el texto que se desea Desencriptar y seleccionar el botón con el texto "Desencriptar":

![Desencriptar](https://github.com/user-attachments/assets/bbf504dd-1e91-4da4-8550-0d44e91be74b)

Tomando de base la función replace() que utilicé en la encriptación, de igual manera la utilicé en el desencriptado, invirtiendo las llaves de encriptación y las vocales:

```javascript
let txtEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
```
Una vez finalizada la desencriptación, se reemplazará el mensaje de "No encontrado" (o el texto actual), mostrado anteriormente por el texto desencriptado:

![Desencriptado](https://github.com/user-attachments/assets/b83f9ee7-64f5-4ab5-b1e2-0fd81308bd93)

### Copiar Texto Resultante

Como se puede observar en las capturas anteriores, en el testo resultante se encuentra un botón con e texto "Copiar":

![Copiar](https://github.com/user-attachments/assets/57fa8e8f-5436-4019-9784-c26cd5a58aeb)

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

Proyecto creado para el "Challenge Encriptador de texto" de Alura en el curso "ONE - Oracle Next Education"

![InsigniaOneChallenge](https://github.com/user-attachments/assets/0a961ef9-7b03-44bd-8453-97e1ecbfea04)
