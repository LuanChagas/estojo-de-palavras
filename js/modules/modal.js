export default class Modal{

    constructor() {
        this.modal = document.querySelector('.modal');
        this.animacao = ['buttonToTop','topToBottom','leftToRight','rightToLeft']
      }

    mostrarModal(){
        this.modal.style.display = 'block'
        this.modal.style.animation = `rightToLeft 500ms `
        setTimeout(()=>{
            this.modal.style.display = 'none'
        },2*350)
    }

    AnimacaoAleatoria(anim){
        return anim[Math.floor(Math.random()*anim.length)]
    }
}