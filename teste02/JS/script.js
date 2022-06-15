
/*pegando o form no html*/ 
const form = document.querySelector('.singup-form')
const feedback = document.querySelector('.feedback')

const Initfibonacci  = (valor) => {
   /*criando o array*/ 
  let fibonacci = [];
  /*iniciando o array com os primeiros valores*/ 
  fibonacci[0] = 0;
  fibonacci[1] = 1;


 /*fazendo o array fibonnaci iterar valores ate o valor setado pelo usuario ser alcançado ou  
 apos o primeiro valor  superior a iteração pausa */ 
  for (var i = 2; fibonacci[fibonacci.length - 1] < parseInt(valor); i++) {
    /*somando os dois valores anteriores e adicionando esse valor ao array*/ 
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  /*retornando o index do elemento caso ele for encontrado no vetor finobacci*/
 const index = fibonacci.findIndex(element => element ===  parseInt(valor) );
 console.log(fibonacci)
  /*se a variavel index for igual a -1 o valor digitado não pertence ao vetor finobacci*/ 
  if (index === -1) {
    /*setando texto na tag p  feedbacp */ 
    feedback.textContent = 'Incorreto! Esse numero não pertence a sequência Fibonacci!' 
    
  } else {
        /*setando texto na tag p  feedbacp */ 
    feedback.textContent = 'Exato! Esse numero pertence a sequência Fibonacci!'

  }
    
 }

/*disparando evento quando o form e enviado pelo usuario*/ 
form.addEventListener('submit', event => { 
  /*evitando que a pagina seja atualizada*/
  event.preventDefault()
  /*pegando ovalor enviado pelo form*/ 
  const valor = event.target.valor.value
  /* invovando a função e passando o parametro*/ 
  Initfibonacci(valor)

})








