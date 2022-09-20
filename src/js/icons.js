import {dados} from './connect.js';

const sol = [
    "Ensolarado",
    "Ar quente",
    "Tempo limpo",
];
const solNuvem = [
    "Sol com poucas nuvens",
    "Ensolarado com muitas nuvens",
];
const nublado = [
    "Tempo frio",
    "Tempo nublado",
    "Parcialmente nublado",
    "Neblina",
]
const chuvisco = [
    "Chuviscos",
    "Alguns chuviscos",
]
const chuva = [
    "Misto chuva e granizo",
    "Chuva",
    "Chuvas esparsas",
]
const trovoada = [
    "Trovoadas dispersas",
]
const tempestade = [
    "Tempestade forte",
    "Tempestade tropical",
    "Tempestades severas",
    "Tempestades",
    "Tempestades isoladas",
    "Tempestade com neve",
]
const neveGelo = [
    "Ventania com neve",
    "Misto chuva e gelo",
    "Misto de neve e chuva",
    "Misto neve e gelo",
    "Neve",
    "Geada fina",
    "Congelamento chuva",
    "Neve baixa",
    "Granizo",
    "Gelo",
    "Neve pesada",
    "Queda de neve",
    "Pesados neve",
    "Chuviscos com neve",
]
const vento = [
    "Vento acentuado",
    "Ventania",
    "Poeira",
    "Fumacento",
]
const furacao = [
    "Trovoadas dispersas",
]

//Icons
let currently = dados.results.currently;
switch(currently){
    case "dia":
        if(sol.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-sun-fill orange";
            document.getElementById("icon").appendChild(icon);
        }
        else if(solNuvem.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-sun orange";
            document.getElementById("icon").appendChild(icon);
        }
        else if(nublado.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-fill white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(chuvisco.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-drizzle-fill white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(chuva.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-sun-fill";
            document.getElementById("icon").appendChild(icon);
        }
        else if(trovoada.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-lightning-rain white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(tempestade.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-lightning-fill white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(neveGelo.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-cloud-snow-fill white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(vento.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-wind white";
            document.getElementById("icon").appendChild(icon);
        }
        else if(furacao.find(element => element == dados.results.description)){
            let icon = document.createElement("i");
            icon.classList = "bi bi-tornado white";
            document.getElementById("icon").appendChild(icon);
        }
        
    break;
    
    case "noite":
        document.querySelector("body").style.background = "linear-gradient(243.18deg, rgba(19, 171, 237, 0.2) 15.22%, rgba(2, 0, 22, 0.2) 100%), #020016"

};