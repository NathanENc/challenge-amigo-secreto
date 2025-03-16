// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();

    // 🔹 Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // 🔹 Evitar nombres duplicados
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = ""; 
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;

        nuevoAmigo.style.padding = "10px";
        nuevoAmigo.style.margin = "5px 0";
        nuevoAmigo.style.fontWeight = "bold";
        nuevoAmigo.style.textAlign = "center";
        nuevoAmigo.style.borderRadius = "10px";
        nuevoAmigo.style.background = `linear-gradient(to right, #ff7eb3, #ff758c, #ff6f61)`;
        nuevoAmigo.style.color = "white";
        nuevoAmigo.style.border = "2px solid white";

        listaAmigos.appendChild(nuevoAmigo);
    });
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Debe haber al menos 3 amigos para sortear.");
        return;
    }

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const elementoResultado = document.createElement("li");
    elementoResultado.innerHTML = `<strong>El amigo secreto es:</strong> ${amigoSorteado}`;

    // 🔹 Estilos del resultado
    elementoResultado.style.padding = "10px";
    elementoResultado.style.fontSize = "20px";
    elementoResultado.style.fontWeight = "bold";
    elementoResultado.style.color = "#05DF05";
    elementoResultado.style.textAlign = "center";
    elementoResultado.style.border = "2px solid #05DF05";
    elementoResultado.style.background = "white";
    elementoResultado.style.borderRadius = "10px";

    resultadoLista.appendChild(elementoResultado);
}

document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const botonAgregar = document.querySelector(".button-add");
    const botonSortear = document.getElementById("botonSortear");

    // Detectar cuando el usuario escribe en el input
    inputAmigo.addEventListener("input", () => {
        if (inputAmigo.value.trim() !== "") {
            botonAgregar.classList.add("active");
        } else {
            botonAgregar.classList.remove("active");
        }
    });

    botonSortear.addEventListener("click", sortearAmigo);
});