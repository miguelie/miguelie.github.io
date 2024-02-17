let miImagen = document.querySelector("#terrario-puerta");

miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute("src");
    if (miSrc === "imagenes/flor-naranja.jpg") {
        miImagen.setAttribute("src", "imagenes/flor-maceta.jpg");
    } else {
        miImagen.setAttribute("src", "imagenes/flor-naranja.jpg");
    } 
};

let miboton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function nombreUsuario() {
    let miNombre = prompt("por favor, introduzca el nombre de usuario.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "mozilla es genial," + miNombre;
}
if (!localStorage.getItem("nombre")) {
    nombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "mozilla es genial," + nombreAlmacenado;
}

function nombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
      nombreUsuario();
    } else {
      localStorage.setItem("nombre", miNombre);
      miTitulo.innerHTML = "Mozilla is genial, " + miNombre;
    }
  }
  
miboton.onclick = function () {
    nombreUsuario();
};