var search = document.getElementById('search')
var linha = document.getElementById('linha')
var botX = document.getElementById('botX')
var icoTec = document.getElementById('icoTec')
var icoMic = document.getElementById('icoMic')
var contSearch = document.getElementById('contSearch')
var cont1= document.getElementById('Cont1')
var pesquisaG = document.getElementById('pesquisaG')
var botPesq = document.getElementById('botPesq')
var botSorte = document.getElementById('botSorte')
var boxText = document.createElement('div')
var boxText2 = document.createElement('div')
var contCaixas = document.getElementById('contCaixas')
var contCaixas2 = document.getElementById('contCaixas2')
search.focus()

var a = document.getElementById('pesquisar');

    
search.oninput= function () {
    linha.style.display = 'block'
    botX.style.display = 'block'
    if (search.value == '') {
        
        linha.style.display = 'none'
        botX.style.display = 'none'
    } else{
        
        a.href = `https://www.google.com.br/search?q=${search.value}`;
    }
}
botX.onclick = function () {
    search.value = ''
    a.style.textDecoration = 'none'
    a.href = ''
    linha.style.display = 'none'
    botX.style.display = 'none'
}


icoTec.onmouseover = function () {
  contCaixas.style.display = 'block'
}
icoTec.onmouseleave = function () {
    contCaixas.style.display = 'none'
}

icoMic.onmouseover = function () {
    contCaixas2.style.display = 'block'
}
icoMic.onmouseleave = function () {
    contCaixas2.style.display = 'none'
}

var mod = document.querySelector('[data-modal-mobile]')
var contMod2 = document.querySelector('[data-cont-mod-2]')
var botNav = document.getElementById('botNav').addEventListener('click', function () {
    mod.style.display = 'block'

    contMod2.addEventListener('click', function () {
        mod.style.display = 'none'
    })
  
  })

  var barraPesquisa = document.getElementById('barra-pesquisa')
  var modalPesquisa = document.querySelector('[data-cont-modal]')
var contSearch = document.getElementById('contSearch')
contSearch.addEventListener('click', function(){

    modalPesquisa.style.display = 'block'
    barraPesquisa.focus()
})


