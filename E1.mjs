import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let name = await userInput.question("Wat is jou name? ") 
let age = await userInput.question("wat is jou leeftijd? ")
let favoriteGame = await userInput.question("wat is lievelingsgame? ")


console.log('Hallo '+ name +', ik hoor dat je '+ age +' jaar oud bent en dat je lievelingsgame '+ favoriteGame +' is.');