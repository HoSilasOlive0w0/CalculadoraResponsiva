function inserir(x){
    document.formulario.tela.value+=x;
}

function limpar(){
    document.formulario.tela.value='';
}

function corrigir(){
    var conteudo = document.formulario.tela.value;
    document.formulario.tela.value = conteudo.substring(0,conteudo.length-1);
}

function calcular(){
    var conteudo = document.formulario.tela.value;
    document.formulario.tela.value = eval(conteudo);
} 