export 
let produtos = document.querySelectorAll(".produtos .produto img");


import jsonObject from "./itens.js"







produtos.forEach((item, index) =>{
    item.setAttribute("src", (jsonObject()[index].img));
    item.parentNode.parentNode.addEventListener('click', function(){
        abaProduto(index)
    })

})

export default function abaProduto(index) {
    var indexProduto = index
    console.log(indexProduto)
    return indexProduto
    /*var produtoEscolhido = {
        index: index
    }
    console.log(produtoEscolhido)
    return produtoEscolhido*/
}
