// chiedo nome utente
var nomeUtente = prompt("Scrivi il tuo nome");

// chiedo cognome utente
var cognomeUtente = prompt("Scrivi il tuo cognome");

// chiedo colore preferito utente
var coloreUtente = prompt("Scrivi il tuo colore preferito");

// creo stringa di saluto
var saluto = "Ciao " + nomeUtente + " " + cognomeUtente;

// creo stringa di generazione password
var password = ", la tua password è: " + nomeUtente + cognomeUtente + coloreUtente;

// creo stringa di output finale
var output = saluto + password + "19";

// inserisco output in pagina
document.getElementById("frase").innerHTML = output;
