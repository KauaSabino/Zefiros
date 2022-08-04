import {dados} from './script.js';

let city = dados.results.city
let temp = String(dados.results.temp);
let clima = dados.results.description;
let day = dados.results.forecast[0].weekday + ", " + dados.results.time;
let date = dados.results.date;
let humid = dados.results.humidity + "%";
let wind = dados.results.wind_speedy;
let sunrise = dados.results.sunrise;
let sunset = dados.results.sunset;

document.getElementById("city").innerText = city;
document.getElementById("clima").innerText = clima;
document.getElementById("temp").innerText = temp + "ºC";
document.getElementById("day").innerText = day;
document.getElementById("date").innerText = date;
document.getElementById("humid").innerText = humid;
document.getElementById("wind").innerText = wind;
document.getElementById("sunrise").innerText = sunrise;
document.getElementById("sunset").innerText = sunset;


