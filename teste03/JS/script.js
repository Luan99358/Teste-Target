
/*pegando o form no html*/ 
const form = document.querySelector('.singup-form')

const feedback = document.querySelector('.feedback')
const feedback2 = document.querySelector('.feedback2')
const feedback3 = document.querySelector('.feedback3')
const feedback4 = document.querySelector('.feedback4')




/*função com uma requisição para carregar os dados do json*/
const data = () => { 
  fetch("./src/data/dados.json")
     .then(response => {
       return response.json();
     })
    /*invocando as funçoes apos dar certo ocarregamento do json */ 
    .then(jsondata => { 
      min_Value(jsondata)
      max_Value(jsondata)
      dias(jsondata)

    })
    
 }
 


/*função para calcular a media*/ 
const media = jsondata => { 
  let counter = 0
  let soma = 0
  let media =0
   
   jsondata.forEach(element => {
     
     if (element.valor > 0) { 
       counter++ 
       soma += element.valor
      
     }
   })
    

   media = soma / counter
  
  return media
}

/*função para carregar ovalor minimo de arrecadação*/ 
const min_Value = jsondata => { 
  let dia = 0
  let minValue = 0
    /*iterando o array e adicionando o menor valor ao array caso satisfaça a condição*/ 
  jsondata.forEach(element => { 
    if (dia === 0) {
      dia = element.dia
      minValue = element.valor
    } else if (element.valor < minValue) { 
      dia = element.dia
      minValue = element.valor
    }
    
  })
  
  feedback.textContent += ' --- O menor valor de faturamento ocorrido em um dia do mês foi dia '+dia+' o valor foi '+minValue+ ' ----' 

}

/*função para carregar o valor maximo de arrecadação*/ 
const max_Value = jsondata => { 
  let dia = 0
  let maxValue = 0
  /*iterando o array e adicionando o maior valor ao array caso satisfaça a condição*/ 
  jsondata.forEach(element => { 
    if (dia === 0) {
      dia = element.dia
      maxValue = element.valor
    } else if (element.valor > maxValue) { 
      dia = element.dia
      maxValue = element.valor
    }
    
  })
   /*mesangem para o usuario*/
  feedback2.textContent += ' --- O Maior valor de faturamento ocorrido em um dia do mês foi dia'+dia+'  o valor foi '+ maxValue+' ----' 

}

/*função para carregar os dias acima da media*/ 
const dias = jsondata => { 
  let dias = []
  console.log(media(jsondata))
 /*iterando o array e trazendo os dias com  valores acima da media e adicionado no array dias*/ 
  jsondata.forEach(element => { 
    if (element.valor > media(jsondata)){
      dias.push(element.dia)
     }
  })

  /*mesangem para o usuario*/
  feedback3.textContent += ' ---  Número de dias no mês em que o valor de faturamento diário foi superior à média mensal foi '+dias.length+' ----' 
  feedback4.textContent += ' ---  Foram os dias : '+dias.join(',')+' ----' 

  console.log(dias) 

}

 
window.onload = function() {
  data()
};



  







