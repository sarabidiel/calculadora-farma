document.getElementById('tabpadrao').click();

function abrirtab (event, idtab) {
    var conteudos = document.getElementsByClassName('conteudo')

    for(var i=0; i< conteudos.length; i++){
        conteudos[i].style.display = 'none'
    }

    var tabs = document.getElementsByClassName('tab-button')
    for(var i=0; i< tabs.length; i++){
        tabs[i].className = tabs[i].className.replace('ativo', '')
    }
    document.getElementById(idtab).style.display = 'block';
    event.currentTarget.className += ' ativo';

}
