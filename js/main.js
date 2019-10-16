var nomeUtente = prompt("Scrivi il tuo nome");

var cognomeUtente = prompt("Scrivi il tuo cognome");

var coloreUtente = prompt("Scrivi il tuo colore preferito");

var saluto = "Ciao " + nomeUtente + cognomeUtente;
var password = ", la tua password è: " + nomeUtente + cognomeUtente + coloreUtente;
var output = saluto + password + "19";

document.getElementById("frase").innerHTML = output;
