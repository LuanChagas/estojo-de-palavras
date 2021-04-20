export default class Funcoes {
  constructor() {
    this.texto = document.querySelector("#texto");
  }

  tornarMaiusculas() {
    this.texto.value = this.texto.value.toUpperCase();
  }

  tornarMinusculas() {
    this.texto.value = this.texto.value.toLowerCase();
  }

  tornarIniciasMaisculas() {
    let palavras = this.texto.value.split(" ");
    let primeira = "";
    palavras.forEach((palavra, index) => {
      if (!palavra) {
        primeira += " ";
      } else if (palavras[index + 1]) {
        console.log("true");
        primeira +=
          palavra[0].toUpperCase() + palavra.slice(1).toLowerCase() + " ";
      } else {
        primeira += palavra[0].toUpperCase() + palavra.slice(1).toLowerCase();
      }
    });
    this.texto.value = primeira;
  }

  tornarNumeros() {
    let letrasEnumeros = [
      ["a", "4"],
      ["b", "8"],
      ["e", "3"],
      ["g", "g"],
      ["h", "#"],
      ["i", "1"],
      ["l", "1"],
      ["o", "0"],
      ["s", "5"],
      ["t", "7"],
      ["z", "2"],
    ];
    this.texto.value = this.texto.value.toLowerCase();
    letrasEnumeros.forEach((leet) => {
      this.texto.value = this.texto.value.replace(leet[0], leet[1]);
    });
  }

  tornarRisc() {
    this.texto.classList.toggle("risc");
  }

  clipboard() {
    this.texto.select();
    document.execCommand("copy");
  }

  contador() {
    return this.texto.value.length;
  }
}
