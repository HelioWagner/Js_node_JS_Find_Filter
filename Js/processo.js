

function converte_vetor(dados_entrada) {
    let vetor_resultado = dados_entrada.split(",")
    return vetor_resultado
}

function busca_find(dados_entrada,dados_encontar) {
 
  valida_dados(dados_entrada,dados_encontar)

  const resultado = dados_entrada.find(index => index == dados_encontar )

  if (resultado==undefined) {
    return false
  }
  return true   
}


function busca_filter(dados_entrada,dados_encontar) {

  valida_dados(dados_entrada,dados_encontar)
  const resultado = dados_entrada.filter(index => index == dados_encontar )
  return resultado.length
}

function valida_dados(dados_entrada,dados_encontar) {
   if ((dados_entrada == '')||(dados_encontar=='')) {
    alert("Os campo lista e encontrar deve ser informados")
    abort()
   }  
}


module.exports = {busca_find,busca_filter,converte_vetor} 