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
var contTec = document.getElementById('contTec')
search.focus()
var a = document.getElementById('pesquisar');

search.oninput= function () {
  
    
   

    linha.style.display = 'block'
    botX.style.display = 'block'
    if (search.value == '') {
      
        a.href =''
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
    boxText.innerHTML= 'Ferramenta de inserção de texto'
    boxText.style.background = 'rgb(53, 52, 52)'
    boxText.style.borderRadius = '1px'
    boxText.style.height = '22px'
    boxText.style.width = '200px'
    boxText.style.textIndent = '10px'
    boxText.style.color = 'white'
    boxText.style.marginLeft = '-200px'
    boxText.style.fontSize = '12px'
    boxText.style.fontWeight = 'bold'
    
    boxText.style.margin = '5px'
    
    contTec.appendChild(boxText)
}
icoTec.onmouseleave = function () {
    boxText.remove(boxText)
}

icoMic.onmouseover = function () {
    boxText2.innerHTML = 'Pesquisa por voz'
    boxText2.style.background = 'rgb(53, 52, 52)'
    boxText2.style.borderRadius = '1px'
    boxText2.style.height = '23px'
    boxText2.style.width = '100px'
    boxText2.style.textIndent = '15px'
    boxText2.style.color = 'white'
    boxText2.style.marginLeft = '-200px'
    boxText2.style.marginTop = '100px'
    boxText2.style.fontSize = '12px'
    boxText2.style.fontWeight = 'bold'

    boxText2.style.margin = '5px'

    contTec.appendChild(boxText2)
}
icoMic.onmouseleave = function () {
    boxText2.remove(pesquisaG)
}




