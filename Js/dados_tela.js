function adiciona_add_event_listener(tag,evento,funcao){
    document.querySelector(tag).addEventListener(evento, funcao)
}

function busca_dados_informados(tag) {
    dados = document.querySelector(tag).value
    return dados
}

function monta_resultado(resultado,tag,conteudo) {
   
    dados = document.querySelector(tag)

    dados.innerHTML = conteudo
    if (resultado){        
        dados.style.backgroundColor = "#0d4e07";   
    }
    else
    {
        dados.style.backgroundColor = "#fa0a0a";   
    }

 
    
}


module.exports = {adiciona_add_event_listener,busca_dados_informados,monta_resultado} 