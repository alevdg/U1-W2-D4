/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function areaRettangolo(l1, l2) {
    // Calcola il prodotto dei due lati
    let result = l1 * l2;
    // Restituisce il risultato
    return result;
  }
  
  // Esempio di utilizzo della funzione
  let esercizio1 = areaRettangolo(5, 10);
  console.log(esercizio1); // Stampa 50
  
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a, b) {
    // Verifica se i due numeri sono uguali
    if (a === b) {
      // Se i due numeri sono uguali, restituisce la loro somma moltiplicata per tre
      return (a + b) * 3;
    } else {
      // Altrimenti, restituisce la loro somma
      return a + b;
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio2a = crazySum(5, 10);
  console.log(esercizio2a); // Stampa 15
  

  //valore è uguale, somma moltiplicata x3//
  let esercizio2b = crazySum(5, 5);
  console.log(esercizio2b); // Stampa 30

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n) {
    // Calcola la differenza tra n e 19
    let diff = n - 19;
    
    // Verifica se la differenza è negativa
    if (diff < 0) {
      // Se la differenza è negativa, la rende positiva
      diff = -diff;
    }
    
    // Verifica se n è maggiore di 19
    if (n > 19) {
      // Se n è maggiore di 19, restituisce la differenza assoluta moltiplicata per tre
      return diff * 3;
    } else {
      // Altrimenti, restituisce la differenza assoluta
      return diff;
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio3a = crazyDiff(5);
  console.log(esercizio3a); // Stampa 14
  
  let esercizio3b = crazyDiff(25);
  console.log(esercizio3b); // Stampa 18

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
    // Verifica se n è compreso tra 20 e 100 (incluso) oppure se è uguale a 400
    if ((n >= 20 && n <= 100) || n === 400) {
      // Se la condizione è vera, restituisce true
      return true;
    } else {
      // Altrimenti, restituisce false
      return false;
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio4a = boundary(5);
  console.log(esercizio4a); // Stampa false
  
  let esercizio4b = boundary(25);
  console.log(esercizio4b); // Stampa true
  
  let esercizio4c = boundary(400);
  console.log(esercizio4c); // Stampa true

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
    // Verifica se la stringa comincia con "EPICODE"
    if (str.startsWith("EPICODE")) {
      // Se la stringa comincia con "EPICODE", restituisce la stringa originale
      return str;
    } else {
      // Altrimenti, aggiunge "EPICODE" all'inizio della stringa e restituisce il risultato
      return "EPICODE" + str;
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio5a = epify("Hello");
  console.log(esercizio5a); // Stampa "EPICODEHello"
  
  let esercizio5b = epify("EPICODE");
  console.log(esercizio5b); // Stampa "EPICODE"


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
    // Verifica se n è un multiplo di 3 o di 7
    if (n % 3 === 0 || n % 7 === 0) {
      // Se n è un multiplo di 3 o di 7, restituisce true
      return true;
    } else {
      // Altrimenti, restituisce false
      return false;
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio6a = check3and7(9);
  console.log(esercizio6a); // Stampa true
  
  let esercizio6b = check3and7(14);
  console.log(esercizio6b); // Stampa true
  
  let esercizio6c = check3and7(10);
  console.log(esercizio6c); // Stampa false

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
    // Inizializza una nuova stringa vuota
    let newString = "";
    
    // Scorre la stringa originale al contrario
    for (let i = str.length - 1; i >= 0; i--) {
      // Aggiunge ogni carattere alla nuova stringa
      newString += str[i];
    }
    
    // Restituisce la stringa invertita
    return newString;
  }
  
  // Esempio di utilizzo della funzione
  let esercizio7 = reverseString("EPICODE");
  console.log(esercizio7); // Stampa "EDOCIPE"

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(str) {
    // Inizializza una nuova stringa vuota
    let newString = "";
    
    // Scorre la stringa originale
    for (let i = 0; i < str.length; i++) {
      // Verifica se il carattere corrente è la prima lettera di una parola
      if (i === 0 || str[i - 1] === " ") {
        // Se il carattere corrente è la prima lettera di una parola, lo rende maiuscolo e lo aggiunge alla nuova stringa
        newString += str[i].toUpperCase();
      } else {
        // Altrimenti, aggiunge il carattere corrente alla nuova stringa senza modificarlo
        newString += str[i];
      }
    }
    
    // Restituisce la nuova stringa
    return newString;
  }
  
  // Esempio di utilizzo della funzione
  let esercizio8 = upperFirst("hello epicode!");
  console.log(esercizio8); // Stampa "Hello Epicode!"
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    // Verifica se la lunghezza della stringa è maggiore di 2
    if (str.length > 2) {
      // Se la lunghezza della stringa è maggiore di 2, restituisce la stringa senza il primo e l'ultimo carattere
      let newStr = "";
      for (let i = 1; i < str.length - 1; i++) {
        newStr += str[i];
      }
      return newStr;
    } else {
      // Altrimenti, restituisce una stringa vuota
      return "";
    }
  }
  
  // Esempio di utilizzo della funzione
  let esercizio9a = cutString("EPICODE");
  console.log(esercizio9a); // Stampa "PICOD"
  
  // Esempio aggiuntivo con valori diversi
  let esercizio9b = cutString("JAVASCRIPT");
  console.log(esercizio9b); // Stampa "AVASCRIP"
  
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    // Crea un array vuoto per contenere i numeri casuali
    let randomNumbers = [];
    
    // Genera n numeri casuali e li aggiunge all'array
    for (let i = 0; i < n; i++) {
      let randomNumber = Math.floor(Math.random() * 11);
      randomNumbers.push(randomNumber);
    }
    
    // Restituisce l'array di numeri casuali
    return randomNumbers;
  }
  
  // Esempio di utilizzo della funzione
  let esercizio10a = giveMeRandom(5);
  console.log(esercizio10a); // Stampa un array di 5 numeri casuali inclusi tra 0 e 10
  
  // Esempio aggiuntivo con valori diversi
  let esercizio10b = giveMeRandom(3);
  console.log(esercizio10b); // Stampa un array di 3 numeri casuali inclusi tra 0 e 10