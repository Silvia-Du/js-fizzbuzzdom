/*
Flusso di lavoro:
1. creare ciclo for con i da 1 a 100;
2. assegnare valori diversi ai multipli nel ciclo for.
3. salvare contenitore in una costante
   creo elemento da aggiungere / con una classe dedicata
   lo aggiungo al contenitore
   creo le eccezioni per il contenuto
4. Assegnazione stile differente per multipli != e condivisi.
*/

const limit =100;
const conTainer =document.querySelector('.container')

//1.
for(let i = 1; i <=limit; i++){
  
  //2.
  if((i % 3 === 0) && (i % 5 === 0)){
    console.log('FizzBuzz');
    
   } else if(i % 3 === 0){
    console.log('Fizz');

   } else if(i % 5 === 0){
    console.log('Buzz');

   } else {
    console.log(i);
   }

   //3. 4.
   const boxEr =document.createElement('div');
   boxEr.className = 'box';
   conTainer.append(boxEr);

   if((i % 3 === 0) && (i % 5 === 0)){
    boxEr.append('FizzBuzz');
    boxEr.classList.add('fizz-buzz-box')

   } else if(i % 3 === 0){
    boxEr.append('Fizz');
    boxEr.classList.add('fizz-box')

   } else if(i % 5 === 0){
    boxEr.append('Buzz');
    boxEr.classList.add('buzz-box')

   } else {
    boxEr.append(i);
   }

}





//2.
