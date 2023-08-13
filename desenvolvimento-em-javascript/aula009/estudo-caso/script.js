var validacao = document.querySelector("#msgValidacao");
var campoNome = document.querySelector("#inome");
var campoEmail = document.querySelector("#iemail");

function validarNome(){
    if(campoNome.value.length == 0){
        validacao.textContent = "Você não preencheu o campo nome";
    }else{
        validacao.textContent = " ";
    }
};

function validarEmail(){
    if(campoEmail.value.length == 0){
        validacao.textContent = "Não esqueça de colocar seu email. Ele é muito importante."
    }else{
        validacao.textContent = " ";
    }
}