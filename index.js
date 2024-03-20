function actualizarEstadoMensaje(mensajeTitulo, mensajeParrafo, imagenSrc) {
  document.getElementById("titulo-mensaje").textContent = mensajeTitulo;
  document.getElementById("parrafo").textContent = mensajeParrafo;
  let muñeco = document.getElementById("muñeco");
  muñeco.src = imagenSrc;
  muñeco.alt = mensajeTitulo;
}

function encriptarDesencriptar(sustituciones, mensajeExito, imagenExito) {
  let texto = document.getElementById("texto").value;
  let textoModificado = texto;

  if (texto.length) {
    for (let clave in sustituciones) {
      textoModificado = textoModificado.replace(new RegExp(clave, "gi"), sustituciones[clave]);
    }

    document.getElementById("texto").value = textoModificado;
    actualizarEstadoMensaje(mensajeExito, "", imagenExito);
  } else {
    actualizarEstadoMensaje("Ningún mensaje fue encontrado", "Ingresa el texto que deseas encriptar o desencriptar", "./img/muñeco.png");
    swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function encriptar() {
  const sustituciones = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  };
  encriptarDesencriptar(sustituciones, "Texto encriptado con éxito", "./img/encriptado.jpg");
}

function desencriptar() {
  const sustituciones = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  };
  encriptarDesencriptar(sustituciones, "Texto desencriptado con éxito", "./img/desencriptado.jpg");
}
