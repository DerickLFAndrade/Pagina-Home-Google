//var search = document.getElementById('search')
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


var a = document.getElementById('pesquisar');


const search = document.getElementById('search');
search.focus()
document.getElementById('botPesq').addEventListener('click', buscar);
search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') buscar();
});
search.addEventListener('input', function () {
    if (search.value) {
        botX.addEventListener('click', function(){
            document.getElementById('linha').style.display = 'none';
            document.getElementById('botX').style.display = 'none';
            search.value = ''
        })
        document.getElementById('linha').style.display = 'block';
        document.getElementById('botX').style.display = 'block';
    } else {
        document.getElementById('linha').style.display = 'none';
        document.getElementById('botX').style.display = 'none';
    }
});

function buscar() {
    
    const input = String(search.value);

    if (input) {
        window.location.href = `https://www.google.com.br/search?q=${input}`;
    }
}



  /*  

search.oninput= function () {
    linha.style.display = 'block'
    botX.style.display = 'block'
    if (search.value == false) {
        
        a.href = `index.html`
        linha.style.display = 'none'
        botX.style.display = 'none'
    } else{
        
        a.href = `https://www.google.com.br/search?q=${search.value}`;
    }
    console.log(search.value)
}

botX.onclick = function () {
    search.value = ''
    a.style.textDecoration = 'none'
    a.href = ''
    linha.style.display = 'none'
    botX.style.display = 'none'
}

*/
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
var contMod = document.querySelector('[data-cont-mod]')
var contMod2 = document.querySelector('[data-cont-mod-2]')
var botNav = document.getElementById('botNav').addEventListener('click', function () {
   
    $('#modalb').fadeIn(00)

    $('#modalb').animate({ left: '200px' })
   
  
  })

contMod2.addEventListener('click', function () {
    $('#modalb').animate({ left: '-200px' })
    $('#modalb').fadeOut(00)
  
})


  var setaMod = document.getElementById('seta-mod')
  var barraPesquisa = document.getElementById('barra-pesquisa2')
  var modalPesquisa = document.querySelector('[data-cont-modal]')
  var linkMod = document.getElementById('link-mod')
var contSearch = document.getElementById('contSearch')
var env = document.getElementById('env')
contSearch.addEventListener('click', function(){

    modalPesquisa.style.display = 'block'
    barraPesquisa.focus()
    barraPesquisa

  setaMod.addEventListener('click', function(){
      modalPesquisa.style.display = 'none'
      barraPesquisa.value = ''
  })

    addEventListener('keydown', function(e){
       if( e.key === 'Enter') buscar2();
    } )

  function buscar2 () {

    if(barraPesquisa.value) {
        window.location.href = `https://www.google.com.br/search?q=${barraPesquisa.value}`;
    }
     
  }
      
  
            
        
    
       
})



