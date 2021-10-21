/* TICKET PRICE CALCULATOR */

// creare le due costanti che andranno inserite dai visitatori
let kilometers;
let age;

// richiedere l'inserimento dei dati finché questi non siano di tipo "number"
do {
    kilometers = parseInt( prompt("Quanti chilometri devi percorrere?"));
} while (isNaN(kilometers));

do {
    age = parseInt( prompt("Quanti anni hai?"));
} while (isNaN(age));

// calcolare il prezzo intero del biglietto moltiplicando il numero di km per 0,21
const fullPrice = kilometers * 0.21;

// se l'età del cliente è minore di 18 allora si applica uno sconto del 20%
// se l'età del cliente è superiore ai 65 anni si applica uno sconto del 40%
// se l'età è compresa tra i 18 ed i 64 allora il prezzo sarà pieno e non scontato
let realPrice;

if ((age > 18) && (age < 65)) {
    realPrice = fullPrice;
} else if (age < 18) {
    realPrice = fullPrice / 100 * 80;
} else if (age > 65) {
    realPrice = fullPrice / 100 * 60;
}

realPrice = parseFloat(realPrice.toFixed(2));
// stampare in output il prezzo del biglietto
document.getElementById("ticketbox").innerHTML = `<h1>Il tuo biglietto costa ${realPrice}€</h1>`

