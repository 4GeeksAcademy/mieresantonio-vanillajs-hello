import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  // Arreglos con las opciones posibles
  const palos = ["heart", "diamond", "club", "spade"];
  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  
  // El diccionario para convertir el texto en el emoji correcto
  const iconos = {
    heart: "♥",
    diamond: "♦",
    club: "♣",
    spade: "♠"
  };

  // Función principal que genera la carta
  function generarCarta() {
    // Selección aleatoria
    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    // Capturar elementos del DOM
    const divCarta = document.getElementById("card");
    const topSuit = document.querySelector(".top-suit");
    const bottomSuit = document.querySelector(".bottom-suit");
    const centerNumber = document.querySelector(".number");

    // Reiniciar y asignar la nueva clase del palo al contenedor principal
    divCarta.className = "card " + paloAleatorio;

    // Inyectar los valores en el HTML
    topSuit.innerHTML = iconos[paloAleatorio];
    bottomSuit.innerHTML = iconos[paloAleatorio];
    centerNumber.innerHTML = valorAleatorio;
  }

  // Ejecuta inmediatamente al cargar la página
  generarCarta();

  // Genera una nueva carta al presionar el botón
  document.getElementById("btn-nueva-carta").addEventListener("click", generarCarta);

  // Genera una nueva carta automáticamente cada 10 segundos o 10000 milisegundos
  setInterval(generarCarta, 10000);

  // Cambia el tamaño de la carta mediante inputs
  document.getElementById("input-ancho").addEventListener("input", function(e) {
    if(e.target.value !== "") {
      document.getElementById("card").style.width = e.target.value + "px";
    }
  });

  document.getElementById("input-alto").addEventListener("input", function(e) {
    if(e.target.value !== "") {
      document.getElementById("card").style.height = e.target.value + "px";
    }
  });
};