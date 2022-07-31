import {dados} from './script.js';

let temp = String(dados.results.temp);
console.log(temp + "ºC");
document.getElementById("temp").value = temp + "ºC";
console.log(dados.results.temp);
