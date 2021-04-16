const btnMenu = document.querySelector('#btn-menu')
const menu = document.querySelector('.side-bar')

function showMenu() {
  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
  })
}
showMenu()