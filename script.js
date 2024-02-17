let botonEncriptar = document.querySelector(".botonEncriptar");
let botonDesencriptar = document.querySelector(".botonDesencriptar");
let contenedorMuneco = document.querySelector(".contenedorMuneco");
let contenedorBajoMuneco = document.querySelector(".contenedorBajoMuneco");
let resultado = document.querySelector(".textoResultado");
let texto = document.querySelector(".texto");

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", desencriptar);

function encriptarTexto (texto) {
    let listaClave = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    
    texto = texto.toLowerCase();
    
    for (let i = 0; i < listaClave.length; i++) {
        if (texto.includes(listaClave[i][0])) {
            texto = texto.replaceAll(listaClave[i][0], listaClave[i][1]);
        }
    }

    return texto;
};


function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal  = "";

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e";
            i = i+2;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o";
            i = i+4;
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u";
            i = i+5;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function encriptar () {
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajaTexto);
}

function desencriptar() {
    ocultarAdelante();
    let cajaTexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajaTexto);
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
        navigator.clipboard.writeText(contenido);
    });