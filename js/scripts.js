const caixaPopUp = document.querySelector('#notificacao')
const botaoPopUp = document.querySelector('#openPopUp')

botaoPopUp.addEventListener('click', () => {

  if(caixaPopUp.classList.contains('visible-notificacao')){ 
    caixaPopUp.classList.remove('visible-notificacao')
  } else {
    caixaPopUp.classList.add('visible-notificacao')
  }
});


