// Definición botones y texto entrada y salida //

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensajeEncriptado");

// Botones //

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
}

botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.getElementById("textoResultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            alert("texto copiado al portapapeles");
        }).catch((err) => {
            console.error('error al copiar el texto', err);
        });
    });

// Función encriptar //
function encriptar(stringEncriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++ ) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
}


// Función desencriptar //



// Función revisar mayúsculas //



// Limpieza de la caja de texto mensaje //


// Ocultar contenedorMuneco //



// Mostrar contenedorMuneco //



    