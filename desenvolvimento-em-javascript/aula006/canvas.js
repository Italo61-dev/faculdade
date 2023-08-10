// selecione o elemento canvas
var canvas = document.getElementById('desenho');

// variável de contexto 2d
var ctx = canvas.getContext('2d');


// desnha um retângulo
ctx.fillStyle = "rgb(180, 0, 0)";
ctx.fillRect(130, 140, 100, 100)

ctx.fillStyle = "rgb(0, 0, 180, 0.7)";
ctx.fillRect(150, 150, 100, 100);


//////////////////////////////////////////
//desnhando um arco
var ctx=document.getElementById('desenho').getContext('2d');

// Inicio um novo path
ctx.beginPath();

// Configurações
var x1 = 190;
var y1 = 310;
var raio = 50;
var angulo_inicio = 0;
var angulo_fim = Math.PI * 2;

// Desenha um arco
ctx.arc(x1, y1, raio, angulo_inicio, angulo_fim);

//desenha as linhas
ctx.stroke();

///////////////////////////////////////////////
//Desenhando texto

// chamando o id do canvas e o método context
ctx=document.getElementById('desenho').getContext('2d')

// definindo a fonte
ctx.font = ("72px serif");

// chmando o filltext, que responsavel por coolocar o texto e a posição do texto, usando uma string, é 20 e o lugar do x, é 100 e o lugar do y,
ctx.fillText("Olá mundo!", 20, 110)


///////////////////////////////
// Aplicando 

// iniciando o canvas
var canvas = document.getElementById('desenho')
var ctx = canvas.getContext('2d');
 
// configurações
var x = 0;
var y = 0;
var altura = 50;
var largura = 0;

function animacao(){
    ctx.fillRect(x, y, largura++, altura)
 }
  
 setInterval(animacao, 0)
