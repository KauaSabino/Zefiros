import {dados} from './script.js';

let currently = dados.results.currently;

switch(currently){
    case "dia":
        document.querySelector("body").style.background = "linear-gradient(243.18deg, rgba(210, 240, 253, 0.2) 10.93%, rgba(0, 0, 0, 0.2) 63.26%), #07ADFC"
        break;
    
    case "noite":
        document.querySelector("body").style.background = "linear-gradient(243.18deg, rgba(19, 171, 237, 0.2) 15.22%, rgba(2, 0, 22, 0.2) 100%), #020016"

}
console.log(currently)