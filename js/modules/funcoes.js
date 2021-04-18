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

  clipboard() {
    this.texto.select();
    document.execCommand("copy");
  }

  contador() {
    console.log(this.texto.value.lengt);
    return this.texto.value.length;
  }
}
