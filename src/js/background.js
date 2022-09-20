import {dados} from './connect.js';

//Background
let currently = dados.results.currently;
switch(currently){
    case "dia":
        if(dados.results.description == "Tempo nublado"){
        document.querySelector("body").style.background = "radial-gradient(127.44% 127.44% at 50% 127.44%, rgba(210, 240, 253, 0) 0%, rgba(104, 129, 173, 0.7) 75.39%), #C2D0E4"
        }
        else{
            document.querySelector("body").style.background = "linear-gradient(243.18deg, rgba(210, 240, 253, 0.2) 10.93%, rgba(0, 0, 0, 0.2) 63.26%), #07ADFC"
        }
    break;
    
    case "noite":
        document.querySelector("body").style.background = "linear-gradient(243.18deg, rgba(19, 171, 237, 0.2) 15.22%, rgba(2, 0, 22, 0.2) 100%), #020016"

};



