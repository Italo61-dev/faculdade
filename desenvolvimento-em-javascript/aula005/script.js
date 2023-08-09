// getElementById
    var titulo = document.getElementById("logo");

    //titulo.innerHTML = "<b><i>AAAAAAAAAA" // -> muda o id selecionado diretamente no html
    //titulo.innerText = "<b><i>AAAAAAAAAA" -> muda o texto do id
    //console.log(titulo.innerHTML);

// getElementsByTagName
    var paragrafos = document.getElementsByTagName("p");

    console.log(paragrafos[0].innerText)

    //mudando a cor do header
    window.onload = ()=>{
    
        var selecionado = document.getElementsByTagName('header');
        selecionado = selecionado[0];

        selecionado.style.backgroundColor = 'purple';
        selecionado.style.fontSize = '3em';
        selecionado.style.color = 'black';
        selecionado.style.width = '100vw';
    }

    
// getElementsByClassName

// querySelectorAll