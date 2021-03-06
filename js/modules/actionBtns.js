import funcoes from "./funcoes.js";
import modal from "./modal.js";

let funcao = new funcoes();
let mod = new modal();

export default class ActionBtns {
  constructor() {
    this.btnMaiusculo = document.querySelectorAll(".maiusculas");
    this.btnMinusculo = document.querySelectorAll(".minusculas");
    this.btnIniciaisMaiscula = document.querySelectorAll(".iniciasMaiusculas");
    this.btnClip = document.querySelectorAll("#clipboard");
    this.mostrarCaracteres = document.querySelectorAll("#contador");
    this.LetrasENumeros = document.querySelectorAll(".letrasNumeros");
    this.riscar = document.querySelectorAll(".riscado");
    this.init();
  }

  fazendoMaiuscula() {
    this.btnMaiusculo.forEach((bt) => {
      bt.addEventListener("click", (e) => {
        e.preventDefault();
        funcao.tornarMaiusculas();
      });
    });
  }

  fazendoMinuscula() {
    this.btnMinusculo.forEach((bt) => {
      bt.addEventListener("click", (e) => {
        e.preventDefault();
        funcao.tornarMinusculas();
      });
    });
  }

  fazendoIniciasMaiuscula() {
    this.btnIniciaisMaiscula.forEach((bt) => {
      bt.addEventListener("click", (e) => {
        e.preventDefault();
        funcao.tornarIniciasMaisculas();
      });
    });
  }

  fazerLetrasENumeros() {
    this.LetrasENumeros.forEach((lN) => {
      lN.addEventListener("click", (e) => {
        e.preventDefault();
        funcao.tornarNumeros();
      });
    });
  }

  fazendoContar() {
    ["keyup", "keydown"].forEach((evento) => {
      funcao.texto.addEventListener(evento, (e) => {
        this.mostrarCaracteres.forEach((show) => {
          show.innerHTML = funcao.contador();
        });
      });
    });
  }

  fazerClip() {
    this.btnClip.forEach((bt) => {
      bt.addEventListener("click", (e) => {
        e.preventDefault();
        funcao.clipboard();
        mod.mostrarModal()
      });
    });
  }

  init() {
    this.fazendoMaiuscula();
    this.fazendoMinuscula();
    this.fazendoIniciasMaiuscula();
    this.fazerClip();
    this.fazendoContar();
    this.fazerLetrasENumeros();
  }
}
