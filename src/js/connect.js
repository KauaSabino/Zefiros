function getApi(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText 
    
    
}

let data = getApi("https://api.hgbrasil.com/weather?format=json-cors&key=4f62a9e8&user_ip=remote")
let dados = JSON.parse(data);
console.log(dados);
export {dados};


