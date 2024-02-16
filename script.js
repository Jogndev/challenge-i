const botonEncriptar = document.querySelector(".boton-encriptar");
const botonDesencriptar = document.querySelector(".boton-desencriptar");
const muneco = document.querySelector(".muneco");
const contenedor = document.querySelector(".contenedor-bajoMuneco");
const resultado = document.querySelector(".texto-resultado");

botonEncriptar.addEventListener("click", encriptar);

botonDesencriptar.addEventListener("click", desencriptar);

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
    let cajaTexto = document.querySelector(".ingreso");
    return cajaTexto.value;
}

function ocultarAdelante() {
    muneco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto (texto) {
    let listaClave = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    
    texto = texto.toLowerCase();
    
    for (let i = 0; i < listaClave.lenght; i++) {
        if (texto.includes(listaClave[i][0])) {
            texto = texto.replaceAll(listaClave[i][0], listaClave[i][1]);
        }
    }

    return texto;
};





function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let textoFinal  = "";

    for (let i = 0; i < texto.lenght; i++) {
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

let botonCopiar = document.querySelector("boton-copiar");
    botonCopiar.addEventListener("click", copiar = () => {
        let contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
    });