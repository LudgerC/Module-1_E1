import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let dagen = parseFloat(await userInput.question("Geef het aantal dagen? "));
let dagenInSec = dagen * 86400;

let uren = parseFloat(await userInput.question("Geef het aantal uren? "));
let urenInSec = uren * 3600;

let minuten = parseFloat(await userInput.question("Geef het aantal uren? "));
let minutenInSec = minuten * 60;

let seconden = parseFloat(await userInput.question("Geef het aantal seconden? "));

let som = dagenInSec + urenInSec + minutenInSec + seconden;

console.log("Aantal seconden: " + som);

process.exit();