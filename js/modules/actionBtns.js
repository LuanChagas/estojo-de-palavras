import funcoes from "./funcoes.js";

let funcao = new funcoes();

export default class ActionBtns {
  constructor() {
    this.btnMaiusculo = document.querySelectorAll(".maiusculas");
    this.btnMinusculo = document.querySelectorAll(".minusculas");
    this.btnIniciaisMaiscula = document.querySelectorAll(".iniciasMaiusculas");
    this.btnClip = document.querySelectorAll("#clipboard");
    this.mostrarCaracteres = document.querySelectorAll("#contador");
    this.fazer();
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
      });
    });
  }

  fazer() {
    this.fazendoMaiuscula();
    this.fazendoMinuscula();
    this.fazendoIniciasMaiuscula();
    this.fazerClip();
    this.fazendoContar();
  }
}
