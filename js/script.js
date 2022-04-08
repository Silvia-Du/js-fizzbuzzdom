/*
a- scrivere un programma che stampi in console i numeri da 1 a 100;
b M1- per i multipli di 3 stampare Fizz al posto del numero/ Buzz per i multipli di 5 /     entrambi i termini per i condivisi;
c M2- dato un contenitore nel DOM appendi al suo interno un elemento html;
d M3- stile differente per i multipli di 3, 5 e condivisi;

Flusso di lavoro:
1. creare ciclo for con i da 1 a 100;
2. assegnare valori diversi ai multipli nel ciclo for.
3. salvare contenitore in una costante
   creo elemento da aggiungere / con una classe dedicata
   lo aggiungo al contenitore
   creo le eccezioni per il contenuto
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

   //3.
   const boxEr =document.createElement('div');
   boxEr.className = 'box';
   conTainer.append(boxEr);

   if((i % 3 === 0) && (i % 5 === 0)){
    boxEr.append('FizzBuzz');
    
   } else if(i % 3 === 0){
    boxEr.append('Fizz');

   } else if(i % 5 === 0){
    boxEr.append('Buzz');

   } else {
    boxEr.append(i);
   }

}





//2.
