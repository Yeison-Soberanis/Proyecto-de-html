//  Mune
let menu = document.querySelector(".menu-icon"); 
// document.querySelector(".menu-icon") selecciona el elemento con la clase menu-icon (botón de menú).
let navbar = document.querySelector(".navbar"); 

// "onclick" significa que la función se ejecutará cuando el usuario haga clic en el ícono del menú.
menu.onclick = () => {
    // Agrega la clase "open-menu" al navbar si no la tiene; si ya la tiene, la elimina.
    // Esto permite mostrar u ocultar el menú de navegación dinámicamente.
    menu.classList.toggle("move");
// animacion de abrir el menu 
    navbar.classList.toggle("open-menu");
};
// Clase Menu On Page Scroll lo que hace es oculta el despliegue del menu cuando bajas usando el mouse
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};
// Input Form Date
window.onload = () => {
    let today = new Date().toISOString().split("T")[0];
    document.getElementById("start-date").value = today;
    document.getElementById("return-date").value = new Date(
        Date.now() + 7 * 86400000
    )
    .toISOString()
    .split("T")[0];
};
// Scroll Reveal Animation es la parte de barra de navegacion se le agrego tiempo
// para dar el efecto de retardo al momento de cargar la pagina 
const animate = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: "2500",
    delay: "400",
});
// efecto al auto del lado derecho 
animate.reveal(".nav,.heading");
animate.reveal(".home-img img", { origin: "right"});
// efecto al botton
animate.reveal(".input-form", { origin: "bottom"});
// efecto al apartado Trending Vehicles al igual que a rental, a descripcion de colaboradores, a reseñas y newsletter o barra de subcripcion 
animate.reveal(".trend-box, .rental-box, .team-box, .t-box, .newsletter", { interval: 100 });