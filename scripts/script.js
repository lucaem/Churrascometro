// Carne - 400 gr por pesso  + de 6 horas
//Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
//Refrigerenta/agua - 100 ml por pesso + 6 horas 1500ml

//criaça valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value


    let qtdeCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdeCerveja = cervejaPP(duracao) * adultos;
    let qtdeRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao)/2 * criancas);


    resultado.innerHTML = `<p>${qtdeCarne/1000}kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdeCerveja/355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${qtdeRefrigerante/1000}L de refrigerante/água</p>`;
    
}

function carnePP(duracao){
    let carne = 400;
        if(duracao >= 6){
            carne = 650;
        }
    return carne;
}

function cervejaPP(duracao){
    let cerveja = 1200;
        if(duracao >= 6){
            cerveja = 2000;
        }
    return cerveja;
}

function refrigerantePP(duracao){
    let refrigerante = 1000;
        if(duracao >= 6){
            refrigerante = 1500;
        }
    return refrigerante;
}