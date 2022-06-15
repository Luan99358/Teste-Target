
/*pegando o form no html*/ 
const form = document.querySelector('.singup-form')


/*criando o array de objetos*/ 
const estados = [
  {
  estado: 'SP',
  valor : 67836.43
  },
  {
    estado: 'RJ',
    valor : 36678.66
  },
  {
    estado: 'MG',
    valor : 29229.88
  },
  {
    estado: 'ES',
    valor : 27165.48
  },
  {
    estado: 'Outros',
    valor : 19849.53
  } 
]

/*função para calculat as porcentagens*/ 
const percentual = estados => { 
  
  let total = 0
  /*correndo oarray de objetos para descobriro valo total*/ 
  estados.forEach(element => {
    total += element.valor 
  })
  /*criando umatag p para mostra o valor total */
  let p = document.createElement('p')
  p.innerText = `O valor total da arrecadação da distribuidora é `+`${total}`.replace('.',',')
  form.append(p)

  /*correndo os objetos e calculandoo seu percentual*/ 
  estados.forEach((element,index) => { 
    /*calculo de porcenbtagem do estado*/ 
    let porc = (element.valor * 100) / total
   /*criando umatag p para mostra o valor total */
    let p = document.createElement('p')
    p.innerText = `A Porcentagem do estado ${element.estado} é : %`+`${porc}`.replace('.',',')+` que é equnalete a R$ `+ `${(element.valor)}`.replace('.',',')
    form.append(p)
  })
  
 
}



 /*invocando a função ao carregar a pagina*/ 
window.onload = function() {
  console.log(estados)
  percentual(estados)
};



  







