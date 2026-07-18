// ===============================
// PORTAFOLIO WEB PERSONAL EDEL
// ===============================

// Mostrar el año actual en el footer
const anio = document.getElementById("anio");
anio.textContent = new Date().getFullYear();


// Desplazamiento suave del menú
const enlaces = document.querySelectorAll('a[href^="#"]');

enlaces.forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Mensaje al cargar la página
window.addEventListener("load", () => {
    console.log("Portafolio Web Personal Edel cargado correctamente.");
});