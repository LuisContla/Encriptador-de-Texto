// Expresión Regular que permite solo letras, minpusculas y sin acentos
const regex = /^[a-z]+$/;

// Funcón para validar que el texto poroporcionado cumpla con los requisitos establecidos
function validar(txt) {
    //console.log(txt);
    if (txt != "") {
        if (regex.test(txt)) {
            alert("El texto cumple las especificaciones");
        }else{
            alert("El texto no cumple las especificaciones");
        }
    }else{
        alert("Debe haber contenido en el texto");
    }
}

function encriptar(){
    texto = document.getElementById("texto-acciones").value;
    validar(texto);
    alert("Datos Válidos")
}