import "./style.scss"

const processo = require("./processo")
const dados_tela = require("./dados_tela")

dados_tela.adiciona_add_event_listener("#botao_find","click",busca_resultado_find)
dados_tela.adiciona_add_event_listener("#botao_filter","click",busca_resultado_filter)

function busca_resultado_find(){

     document.querySelector("#resultado_find").style.backgroundColor = "#463b1d";   
     document.querySelector("#resultado_find").innerHTML = "Resultado";  
     
      //busca dados informados
      const dados_lista     = dados_tela.busca_dados_informados("#lista_find")
      const dados_encontrar = dados_tela.busca_dados_informados("#encontrar_find")

      //convert resultado um vetor
      const resultado_entrada = processo.converte_vetor(dados_lista) 
      
      //busca resultado do find
      const resultado = processo.busca_find(resultado_entrada,dados_encontrar)
      const resultado_final = resultado==true?"Encontrado":"Não Encontrado!"
       
       dados_tela.monta_resultado(resultado,"#resultado_find",resultado_final)   
     //  console.log(resultado_final)

}


function busca_resultado_filter(){
    document.querySelector("#resultado_filter").style.backgroundColor = "#463b1d";   
    document.querySelector("#resultado_filter").innerHTML = "Resultado";   
     
    //busca dados informados
    const dados_lista     = dados_tela.busca_dados_informados("#lista_filter")
    const dados_encontrar = dados_tela.busca_dados_informados("#encontrar_filter")

    //convert resultado um vetor
    const resultado_entrada = processo.converte_vetor(dados_lista) 
    
    //busca resultado do find
    const resultado = processo.busca_filter(resultado_entrada,dados_encontrar)
    const resultado_final = resultado+" encontrados"     
    dados_tela.monta_resultado(resultado>0,"#resultado_filter",resultado_final)   

}
