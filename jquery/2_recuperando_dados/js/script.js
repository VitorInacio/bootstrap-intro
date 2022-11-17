
$(document).ready(function(){

    //adicionar css
    $('#lista').css("color","red");

    //adicionando html
    $('.element').html("Meu texto via jquery");

    //disparar no click
    $("a").click(function(){
        alert("Olá Mundo")
    })

    /*
    . - classe
    # - id
      - elemento (as tags)
    */
})

//criando funcao


function pegarvalor(){
    var nome = document.querySelector('.nome').value;
    var sob = document.querySelector('.sobrenome').value;

    alert("Seja bem vindo, " + nome + " " + sob );
    console.log(nome);
}