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

function desencriptarTexto(texto) {
    let listaClave = [
        ["ai", "a"],
        ["enter", "e"],
        ["imes", "i"],
        ["ober", "o"],
        ["ufat", "u"]
    ];
    texto = texto.toLowerCase();

    for (let i = 0; i < listaClave.length; i++) {
        let clave = listaClave[i];
        let regex = new RegExp("\\b" + clave[0] + "\\b", "g");
        texto = texto.replace(regex, clave[1]);
    }
    return texto;
};

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
    