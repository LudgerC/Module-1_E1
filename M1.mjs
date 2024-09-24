// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let getal1 = parseFloat(33);
let getal2 = parseFloat(5);

let som = getal1 + getal2;
let verschil = getal1 - getal2;
let product = getal1 * getal2;
let deling = getal1 / getal2;

console.log("Som is " + som);
console.log("Verschil is " + verschil);
console.log("Product is " + product);
console.log("Deling is " + deling);

// Voeg hier je eigen code in



process.exit();