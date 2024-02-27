// Definición botones y texto entrada y salida //

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensajeEncriptado");

// Botones //

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

// Función encriptar //
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++ ) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}


// Función desencriptar //



// Función revisar mayúsculas //



// Limpieza de la caja de texto mensaje //


// Ocultar contenedorMuneco //



// Mostrar contenedorMuneco //



    