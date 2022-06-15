
/*pegando o form no html e o feedback*/ 
const form = document.querySelector('.singup-form')
const feedback = document.querySelector('.feedback')

const Invert  = (valor) => {
  /*criando o array*/
  console.log(valor)
  let palavra = []
  let palavrainvert =[]
  palavra = valor.split('')
  
  for (let i = 0;i < palavra.length ; i++) { 
   /*pegando do ultimo item do array  o primeiro e adicionando no array*/
    palavrainvert[i] = palavra[(palavra.length - 1) - i] 
  }

  feedback.textContent = `Palavra inverida = ${palavrainvert.join('')}`
    
 }

/*disparando evento quando o form e enviado pelo usuario*/ 
form.addEventListener('submit', event => { 
  /*evitando que a pagina seja atualizada*/
  event.preventDefault()
  /*pegando o valor enviado pelo form*/ 
  const valor = event.target.valor.value
  /* invocando a função e passando o parametro*/ 
  Invert(valor)

})








