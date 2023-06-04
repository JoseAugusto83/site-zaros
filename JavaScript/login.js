//Variaveis do form da esquerda(cadastro)
let formCadastro = document.querySelector(".form-cadastro");
let emailCadastro = document.querySelector("#email");
let telCadastro = document.querySelector("#tel-number");
let senhaCadastro = document.querySelector("#senha");
let nomeCadastro = document.querySelector("#nome");

//Variaveis do form da direita(login)
let formLogin = document.querySelector(".form-login")
let emailLogin = document.querySelector("#email-login")
let senhaLogin = document.querySelector("#senha-login")





formCadastro.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();

})


formLogin.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputsLogin();
})


console.log(emailCadastro.getAttribute("id"))




function checkInputs(){
    var nameValue = nomeCadastro.value;
    var emailValue = emailCadastro.value;
    var senhaValue = senhaCadastro.value;
    var telValue = telCadastro.value;
    var validacao = 0;
    
    if(nameValue === ""){
        validationError(nome, "O nome é obrigatório!")
        
    }else {
        validationSuccess(nome)
        validacao++
    }

    if(emailValue ===""){
        validationError(emailCadastro, "O Email é obrigatório")

    }else if(checkEmail(emailValue) === false){
        validationError(emailCadastro, "Digite um email valido!")
    }
    
    else{
        validationSuccess(emailCadastro)
        validacao++
    }

    if(senhaValue === ""){
        validationError(senhaCadastro, "A senha é obrigatória!")

    }else if(senhaValue.length < 7){
        validationError(senhaCadastro, "A senha precisa ter ao menos 7 caracteres")
    }
    
    else{
        validationSuccess(senhaCadastro);
        validacao++
    }

    if(telValue === ""){
        validationError(telCadastro, "Telefone é obrigatório!")

    }

    else if(!isNaN(parseFloat(telValue)) && isFinite(telValue) === false){
        validationError(telCadastro, "Digite apenas números!")
    }

    else{
        validationSuccess(telCadastro);
        validacao++
    }


   if(validacao === 4){
    window.location.href = "../index.html"
   }
    
    

}



function checkInputsLogin(){
    var emailValue = emailLogin.value;
    var senhaValue = senhaLogin.value;
    var validacao = 0;

    if(emailValue ===""){
        validationError(emailLogin, "O Email é obrigatório")

    }else if(checkEmail(emailValue) === false){
        validationError(emailLogin, "Digite um email valido!")
    }

    else{
        validationSuccess(emailLogin)
        validacao++
    }

    if(senhaValue === ""){
        validationError(senhaLogin, "A senha é obrigatória!")

    }else if(senhaValue.length < 7){
        validationError(senhaLogin, "A senha precisa ter ao menos 7 caracteres")
    }

    else{
        validationSuccess(senhaLogin);
        validacao++
    }

    if(validacao === 2){
        window.location.href = "../index.html"
    }

}


function validationError(input, mensagem){
    let campoInput = input.getAttribute("id")
    let small = document.querySelector("." + campoInput)
    small.classList.add("error")
    small.innerText = mensagem
}


function validationSuccess(input){
    let campoInput = input.getAttribute("id")
    let small = document.querySelector("." + campoInput)
    small.classList.remove("error")
    small.innerText = ""

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}


