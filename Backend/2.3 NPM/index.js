// var generateName = require("sillyname");
import generateName from "sillyname"
import {randomSuperhero} from "superheroes"

var sillyName = generateName();

console.log(`My normal name is ${sillyName}.`);
console.log(`I am ${randomSuperhero()}`)

