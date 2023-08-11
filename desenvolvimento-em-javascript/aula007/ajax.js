var xhr = new XMLHttpRequest(); // cria objeto xhr
 
xhr.responseType = "json";  // tipo da resposta
 

var i = 0;  // um simples contador
var doc = {
    "UserId" : 1,
    "title" : "Olá",
    "body" : "Olá mundo"
}
// verifia se o estado da conexão mudou
xhr.onreadystatechange = ()=>{
 
  var pronto = xhr.readyState;  // a conexão foi feita?
  var estado = xhr.status;  // status da requisição?
  var resposta = xhr.response;  // qual a resposta?
  
  i++;  // contador de mudanças
  
  console.log("#", i)  // contador de mudanças
  
  // como está a conexão
  console.log("Status da conexão:", pronto); 
 
  // qual o código da resposta
  console.log("Código da resposta:", estado);  
  
  // mostre a resposta
  console.log(resposta);  
}
// conecta ao site
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");  
xhr.send(doc)  // envia requisição