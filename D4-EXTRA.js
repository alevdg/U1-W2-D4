// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(numbers) {
    // Inizializza la variabile sum a 0
    let sum = 0;
    
    // Itera attraverso ogni elemento dell'array utilizzando un ciclo for
    for (let i = 0; i < numbers.length; i++) {
      // Controlla se il numero è maggiore di 5
      if (numbers[i] > 5) {
        // Se è maggiore di 5, stampa in console e aggiungi il valore alla somma
        console.log(numbers[i] + " è maggiore di 5");
        sum += numbers[i];
      } else {
        // Se non è maggiore di 5, stampa in console
        console.log(numbers[i] + " non è maggiore di 5");
      }
    }
    
    // Ritorna la somma dei valori maggiori di 5
    return sum;
  }
  
  // Esempio di utilizzo della funzione checkArray con un array di numeri casuali generati dalla funzione giveMeRandom
  let randomNumbers = giveMeRandom(10);
  let resultES1 = checkArray(randomNumbers);
  console.log("La somma dei valori maggiori di 5 è: " + resultES1);
  
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function shoppingCartTotal(shoppingCart) {
    // Inizializza la variabile total a 0
    let total = 0;
    
    // Itera attraverso ogni elemento dell'array utilizzando un ciclo for
    for (let i = 0; i < shoppingCart.length; i++) {
      // Aggiungi il prezzo dell'oggetto moltiplicato per la sua quantità al totale
      total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    
    // Ritorna il totale dovuto al negozio
    return total;
  }
  
  // Esempio di utilizzo della funzione shoppingCartTotal con un array di oggetti
  let shoppingCart = [
    { price: 10, name: "Item 1", id: 1, quantity: 2 },
    { price: 20, name: "Item 2", id: 2, quantity: 1 },
    { price: 30, name: "Item 3", id: 3, quantity: 3 }
  ];
  let resultES2 = shoppingCartTotal(shoppingCart);
  console.log("Il totale dovuto al negozio è: " + resultES2);
  
/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newItem) {
    // Aggiungi il nuovo oggetto all'array shoppingCart
    shoppingCart.push(newItem);
    
    // Ritorna il nuovo numero totale degli elementi in shoppingCart
    return shoppingCart.length;
  }
  
  // Esempio di utilizzo della funzione addToShoppingCart con un array di oggetti

  let newItem = { price: 40, name: "Item 4", id: 4, quantity: 1 };
  let resultES3 = addToShoppingCart(newItem);
  console.log("Il nuovo numero totale degli elementi in shoppingCart è: " + resultES3);


// La funzione addToShoppingCart riceve un oggetto come parametro
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(shoppingCart) {
    // Inizializza la variabile maxItem a null
    let maxItem = null;
    
    // Itera attraverso ogni elemento dell'array utilizzando un ciclo for
    for (let i = 0; i < shoppingCart.length; i++) {
      // Controlla se maxItem è null o se il prezzo dell'oggetto corrente è maggiore del prezzo di maxItem
      if (maxItem === null || shoppingCart[i].price > maxItem.price) {
        // Se è vero, imposta maxItem all'oggetto corrente
        maxItem = shoppingCart[i];
      }
    }
    
    // Ritorna l'oggetto più costoso in shoppingCart
    return maxItem;
  }
  
  // Esempio di utilizzo della funzione maxShoppingCart con un array di oggetti

  let resultES4 = maxShoppingCart(shoppingCart);
  console.log("L'oggetto più costoso in shoppingCart è: " + resultES4.name + " con prezzo " + resultES4.price);
  
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
