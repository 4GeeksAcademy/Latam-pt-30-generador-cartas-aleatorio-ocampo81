/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const paloSymbols = {
  spade: "♠",
  club: "♣",
  heart: "♥",
  diamond: "♦"
};

const getRandomElement = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// Funcion para generar una carta aleatoria
const generateRandomCard = () => {
  const randomPalo = getRandomElement(Object.keys(paloSymbols));
  const randomValor = getRandomElement(valores);
  return { palo: randomPalo, valor: randomValor };
};

// Esto me costo mucho entenderlo, debo repasarlo para dominarlo(Muestra el palo)
const setSuitCard = palo => {
  const suitUp = document.getElementById("suitUp");
  const suitDown = document.getElementById("suitDown");

  const symbol = paloSymbols[palo];
  suitUp.textContent = symbol;
  suitDown.textContent = symbol;
};

// Funcion para mostrar la carta generada
const displayRandomCard = (palo, valor) => {
  document.querySelector(".numCard").textContent = valor;
  const card = document.querySelector(".card");
  card.className = "card";
  card.classList.add(palo);
  setSuitCard(palo);
};

const play = () => {
  const { palo, valor } = generateRandomCard();
  displayRandomCard(palo, valor);
};

window.onload = play;