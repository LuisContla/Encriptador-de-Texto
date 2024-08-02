// Expresión Regular que permite solo letras, minpusculas y sin acentos
const regex = /^[a-z]+$/;

// Funcón para validar que el texto poroporcionado cumpla con los requisitos establecidos
function validar(op) {
    // Elemento de HTML que contiene el texto ingresado por el usuario
    var texto = document.getElementById("texto-acciones").value;
    // Elemento de HTML donde se muestra el texto resultante
    const resultado = document.getElementById("texto-resultado");

    //Validamos que haya contenido en en textarea
    if (texto != "") {
        //Hay contenido en el textarea

        //Validamos que el contenido cumpla las especificaciones
        if (regex.test(texto)) {

            //Se cumplen las especificaciones
            alert("El texto cumple las especificaciones");
            if (op == 1) {
                //El texto se encriptará
                alert("Encriptando...");
                encriptar(texto, resultado);
            }else{
                //El texto se desencriptará
                alert("Desencriptando...")
                desencriptar(texto, resultado);
            }

        }else{
            //No se cumplen las especificaciones
            alert("El texto no cumple las especificaciones");
        }

    }else{
        //No hay contenido en el textarea
        alert("Debe haber contenido en el texto");
    }
}

function encriptar(texto, resultado){
    resultado.children[0].textContent = texto;
}

function desencriptar(texto, resultado){
    resultado.children[0].textContent = texto;
}