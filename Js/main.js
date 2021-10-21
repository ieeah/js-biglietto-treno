/* TICKET PRICE CALCULATOR */

// ottenere quanti chilometri si desidera percorrere e farne una costante

const kilometers = parseInt( prompt("Quanti chilometri devi percorrere?") );

// verificare che il dato inserito sia un numero
if ( isNaN(kilometers) ) {
    alert("il dato inserito non è un numero, ricarica la pagina per calcolare il prezzo del tuo biglietto!");
}

// calcolare il prezzo del biglietto moltiplicando il numero di km per 0,21
const fullPrice = kilometers * 0.21;

// limitare gli eventali decimali a due cifre

// ottenere età cliente
const age = parseInt( prompt("facci sapere la tua età così possiamo applicarti un eventuale sconto?") );

// se l'età del cliente è minore di 18 allora si applica uno sconto del 20%
// se l'età del cliente è superiore ai 65 anni si applica uno sconto del 40%
// se l'età è compresa tra i 18 ed i 64 allora il prezzo sarà pieno e non scontato
let realPrice;
if (age < 18) {
    realPrice = fullPrice / 100 * 80;
} else if (age > 65) {
    realPrice = fullPrice / 100 * 60;
}
else {
    realPrice === fullPrice;
}
realPrice = realPrice.toFixed(2);

// stampare in output il prezzo del biglietto
document.getElementById("ticketbox").innerHTML = `Il tuo biglietto costa ${realPrice}€`