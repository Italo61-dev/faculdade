// getElementById
    //var titulo = document.getElementById("logo");

    //titulo.innerHTML = "<b><i>AAAAAAAAAA" // -> muda o id selecionado diretamente no html
    //titulo.innerText = "<b><i>AAAAAAAAAA" -> muda o texto do id
    //console.log(titulo.innerHTML);

// getElementsByTagName
    // var paragrafos = document.getElementsByTagName("p");

    // console.log(paragrafos[0].innerText)

    //mudando a cor do header
    window.onload = ()=>{
        
        var selecionado = document.getElementsByTagName('header');
        selecionado = selecionado[0];
        var texto_selecionado=selecionado.querySelectorAll("#logo")[0];// querySelectorAll
        
        
        selecionado.style.backgroundColor = 'purple';
        selecionado.style.fontSize = '3em';
        texto_selecionado.style.color = 'black';
        selecionado.style.width = '100vw';
    }
    
    
    // getElementsByClassName
    var texto = document.getElementsByClassName("texto")[1]
    texto.style.color = "red";

    // querySelectorAll
    var topo = document.querySelectorAll('header')[0];

    topo.style.backgroundColor = "black";