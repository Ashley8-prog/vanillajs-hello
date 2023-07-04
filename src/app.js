/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#the-excuse").innerHTML = randomNumber();
};
let randomNumber = () => {
  let Pronombre = ["Su", "Él"];
  let quien = ["cobaya", "vecino", "gato", "mamá"];
  let acción = ["se comió", "rompió", "rasgó"];
  let posesión = ["mi tarea", "mi pantalon", "mis zapatos", "mi celular"];
  let cuando = ["anoche", "Hoy", "en la manaña", "ayer"];

  let pronIndex = Math.floor(Math.random() * Pronombre.length);
  let quienIndex = Math.floor(Math.random() * quien.length);
  let AccionIndex = Math.floor(Math.random() * acción.length);
  let posesionIndex = Math.floor(Math.random() * posesión.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    Pronombre[pronIndex] +
    " " +
    quien[quienIndex] +
    " " +
    acción[AccionIndex] +
    " " +
    posesión[posesionIndex] +
    " " +
    cuando[cuandoIndex]
  );
};
