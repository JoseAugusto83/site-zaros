let abrirMenu = document.querySelector(".nav-mobile .fa-bars")
let menuAberto = document.querySelector(".nav-mobile .menu")
let menuFechado = document.querySelector


abrirMenu.addEventListener("click",abrirMenuMobile)
menuAberto.addEventListener("click", abrirMenuMobile)

function abrirMenuMobile(event){
    menuAberto.classList.add("menu-aberto")
    if(event.target === menuAberto){
        menuAberto.classList.remove("menu-aberto")
    }
}