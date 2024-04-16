
const nomeUtente = prompt("Qual è il tuo nome ?");

const cognomeUtente = prompt("Qual è il tuo cognome ?");

const coloreUtente = prompt("Qual è il tuo colore preferito ?");


let password = `${nomeUtente}${cognomeUtente}${coloreUtente} #24`;

console.log(password);

document.getElementById('password').innerHTML = password ;