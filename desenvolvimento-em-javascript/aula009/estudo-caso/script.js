var msgNome = document.get("#nomesobrenome");
 

 
function validarNome(){
 
   if(msgNome.value.length == 0){
      erro.textContent = "Nome é um campo Obrigatório";
   }else{
     erro.textContent = ""; 
  }
 
 };