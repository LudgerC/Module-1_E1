import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboorteJaar = parseFloat(await userInput.question("Wat is je geboorteJaar? "));
let toekomstJaar = parseFloat(await userInput.question ("Wat is jou toekomstejaar? "));

console.log("In " + toekomstJaar + " zal ik " + (toekomstJaar - geboorteJaar) + " Of " + (toekomstJaar - geboorteJaar + 1) + " Jaar oud zijn.");

process.exit();