// Definición botones y texto entrada y salida //

let botonEncriptar = document.getElementById("botonEncriptar");
let botonDesencriptar = document.getElementById("botonDesencriptar");
let botonCopiar = document.getElementById("botonCopiar");
let contenedorMuneco = getElementById("contenedorMuneco");
let textoResultado = document.getElementById("textoResultado");
let mensaje = document.getElementById("mensaje");

// Botones //

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", desencriptar);

botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.getElementById("textoResultado").textContent;
        navigator.clipboard.writeText(contenido).then(() => {
            alert("texto copiado al portapapeles");
        }).catch((err) => {
            console.error('error al copiar el texto', err);
        });
    });

// Función encriptar //

function encriptarTexto (str) {
    var reemplazo = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };
    str = str.replace(/a|e|i|o|u/g, function(coincidencia) 
    {
        return reemplazo[coincidencia];
    });
    console.log(str);
    textoResultado.textContent = str;
    if (textoResultado.innerText.length > 0) {
        ocultarAdelante();
    } else {
        mostrarAdelante();
    }
}

// Función desencriptar //

function desencriptarTexto(str) {
    var reemplazo = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };
    str = str.replace(/ai|enter|imes|ober|ufat/g, function(coincidencia){
        return reemplazo[coincidencia];
    });
    console.log(str);
    textoResultado.textContent = str;
    if (textoResultado.innerText.length > 0) {
        ocultarAdelante();
    } else {
        mostrarAdelante();
    }
}

// Función revisar mayúsculas //

function revisarMayusculas(str) {
    const conMayusculas = /[A-ZÁÉÍÓÚ]/;
    const conTildes = /[ÁÉÍÓÚáéíóú]/;
    return conMayusculas.test(str) || conTildes.test(str);
}

// Limpieza de la caja de texto mensaje //

mensaje.addEventListener("click", function() {
    mensaje.value = "";
});

// Ocultar contenedorMuneco //



// Mostrar contenedorMuneco //

function encriptar () {
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
    ocultarAdelante();
}

    