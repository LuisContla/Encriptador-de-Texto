// Expresión Regular que permite solo letras, minúsculas y sin acentos
const regex = /^[a-z]([a-z]|\s)*$/;

// Funcón para validar que el texto poroporcionado cumpla con los requisitos establecidos
function validar(op) {
    // Elemento de HTML que contiene el texto ingresado por el usuario
    var texto = document.getElementById("texto-acciones").value;
    // Elemento de HTML donde se muestra el texto resultante
    const resultado = document.getElementById("texto-resultado");
    // Elementos donde se muestra el texto encriptado/desencriptado o imagen en caso de no haber texto
    const noEncontrado = document.getElementById("no-encontrado");
    const encontrado = document.getElementById("encontrado");

    //Validamos que haya contenido en en textarea
    if (texto != "") {
        //Hay contenido en el textarea

        //Validamos que el contenido cumpla las especificaciones
        if (regex.test(texto)) {

            //Se cumplen las especificaciones
            alert("El texto cumple las especificaciones");
            if (op == 1) {
                //El texto se encriptará
                encriptar(texto, resultado);
                encontrado.style.display = "block";
                noEncontrado.style.display = "none";
                

            } else {
                //El texto se desencriptará
                desencriptar(texto, resultado);
                encontrado.style.display = "block";
                noEncontrado.style.display = "none";
            }

        } else {
            //No se cumplen las especificaciones
            alert("El texto no cumple las especificaciones");
        }

    } else {
        //No hay contenido en el textarea
        alert("Debe haber contenido en el texto");
    }
}

function encriptar(texto, resultado) {
    // Usaré la función replace para cambiar las vocales con las llaves de encriptación
    let txtEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    resultado.children[0].textContent = txtEncriptado;
}

function desencriptar(texto, resultado) {
    // Usaré la función replace para cambiar las llaves de encriptación con las vocales correspondientes
    let txtDesecriptado = texto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    resultado.children[0].textContent = txtDesecriptado;
}

const copiarContenido = async () => {
    // Obtengo el texto del text area del resultado
    let txtCopiar = document.getElementById('txt-res').value;
    try {
        await navigator.clipboard.writeText(txtCopiar);
        alert('Contenido copiado al portapapeles');
    } catch (err) {
        alert('Error al copiar: ', err);
    }
}