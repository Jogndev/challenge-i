// Definición botones y texto entrada y salida //

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensajeEncriptado");

// Botones //

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function botonDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value  = "";
}

async function botonCopiar() {
    // Obtén el textarea con la clase 'mensajeEncriptado'
    const textarea = document.querySelector('.mensajeEncriptado');

    // Verifica si el navegador admite la API Clipboard Web
    if (navigator.clipboard) {
        try {
            // Copia el texto del textarea al portapapeles
            await navigator.clipboard.writeText(textarea.value);

            // Muestra un mensaje de éxito
            alert('Texto copiado al portapapeles');
        } catch (err) {
            // Muestra un mensaje de error si no se pudo copiar el texto
            alert('No se pudo copiar el texto al portapapeles: ' + err.message);
        }
    } else {
        // Si el navegador no admite la API Clipboard Web, muestra un mensaje de error
        alert('Tu navegador no admite la API Clipboard Web. Por favor, utiliza un navegador más moderno.');
    }
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

function desencriptar() {
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
    ocultarAdelante();
}

function recuperarTexto() {
    let cajaTexto = document.querySelector(".texto");
    return cajaTexto.value;
}

function ocultarAdelante() {
    contenedorMuneco.classList.add("ocultar");
    contenedorBajoMuneco.classList.add("ocultar");
}

let botonCopiar = document.querySelector(".botonCopiar");
    botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.querySelector(".textoResultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            alert("texto copiado al portapapeles");
        }).catch((err) => {
            console.error('error al copiar el texto', err);
        });
    });
    