function fazerRequisicao(){

    var url = "https://api.hgbrasil.com/weather?format=json-cors&key=4f62a9e8&city_name=Guarulhos";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);

    xhttp.send();

    let dados = JSON.parse(xhttp.responseText)

    console.log(dados.results);
    
}
fazerRequisicao();
