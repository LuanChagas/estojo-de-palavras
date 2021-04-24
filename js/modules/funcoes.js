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
    this.texto.value = this.texto.value
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, (a) => {
        return a.toUpperCase();
      });
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
      let regexEx = new RegExp(leet[0], "g");
      this.texto.value = this.texto.value.replace(regexEx, leet[1]);
    });
  }

  clipboard() {
    navigator.clipboard.writeText(this.texto.value).then(()=>{
    
    }).catch(()=>{
      console.log('error');
    });
  }

  contador() {
    return this.texto.value.length;
  }
}
