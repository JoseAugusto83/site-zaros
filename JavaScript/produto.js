let tamanhos = document.querySelectorAll(".container-infos .infos .sizes .size p");
let buttonLeft = document.querySelector(".infos .button-qtt .button-left")
let buttonRight = document.querySelector(".infos .button-qtt .button-right")
let qtt = document.querySelector(".infos .button-qtt .qtt")


tamanhos.forEach((tamanho) =>{
    tamanho.addEventListener("click", selecionado)
})

function selecionado(event){
    tamanhos.forEach((tamanho) =>{
        tamanho.parentElement.classList.remove("tamanho-selecionado")
    })

        var selecionado = event.target.parentElement;
        selecionado.classList.add("tamanho-selecionado")
    
}


buttonLeft.addEventListener("click", mudaQuantidade)
buttonRight.addEventListener("click", mudaQuantidade)

var quantidade = 1


function mudaQuantidade(event){
    
    if(event.target.getAttribute("class") == "button-left" && qtt.innerText > 1){
        quantidade -= 1
        qtt.innerHTML = quantidade
    }

    else if(event.target.getAttribute("class") == "button-right"){
        quantidade += 1
        console.log(event.target)
        qtt.innerHTML = quantidade
    }
}