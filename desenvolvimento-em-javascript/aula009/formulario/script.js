var erroNome = document.querySelector('#erroNome');
var erroEmail = document.querySelector('#erroEmail');
var erroTelefone = document.querySelector('#erroTelefone');
var erroMensagem = document.querySelector('#erroMsg'); // Correção: erroMensagem, não ierroMsg

function exibirInfo(){
    alert("É importante relatar sua mensagem de forma clara.");
}

function validarCampos(){ // Correção: validarCampos, não ValidarCampos
    var nome = document.querySelector('#inomeesobrenome');
    var email = document.querySelector('#iemail');
    var telefone = document.querySelector('#itelefone');
    var mensagem = document.querySelector('#imensagem');

    if(nome.value.length == 0){
        erroNome.textContent = "Nome é um campo Obrigatório";
    } else {
        erroNome.textContent = "";
    }

    if(email.value.length == 0){
        erroEmail.textContent = "Email é um campo Obrigatório";
    } else {
        erroEmail.textContent = "";
    }

    if(telefone.value.length == 0){
        erroTelefone.textContent = "Telefone é um campo Obrigatório";
    } else {
        erroTelefone.textContent = "";
    }

    if(mensagem.value.length == 0){
        erroMensagem.textContent = "Mensagem é um campo Obrigatório";
    } else {
        erroMensagem.textContent = "";
    }

    if(nome.value.length != 0 && email.value.length != 0 && telefone.value.length != 0 && mensagem.value.length != 0){
        confirm('Cadastro efetuado com sucesso');
    }
}
