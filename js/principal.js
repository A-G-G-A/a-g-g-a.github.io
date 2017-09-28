var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste Mudando";

var paciente = document.querySelectorAll(".paciente");
for (var index = 0; index < paciente.length; index++) {

    var nome = paciente[index].querySelector(".info-nome").textContent;
    var peso = paciente[index].querySelector(".info-peso").textContent;
    var altura = paciente[index].querySelector(".info-altura").textContent;
    var gordura = paciente[index].querySelector(".info-gordura").textContent;
    var imc = paciente[index].querySelector(".info-imc");
    var dadosValidos = true;

    if (peso < 0 || peso > 300) {
        console.log("Dados inválidos, peso!");
        dadosValidos = false;
    } else if (altura < 0 || altura > 3.00) {
        console.log("Dados inválidos, altura!");
        dadosValidos = false;
    } if (dadosValidos) {
        var calculo_imc = peso / (altura * altura);
        imc.textContent = calculo_imc.toFixed(3);
    }
}

var form = document.querySelector("#form-adiciona");
var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", adiconaNovopaciente);

function adiconaNovopaciente() {
    event.preventDefault();
    console.log("botão acionado");

    var nomeform = form.nome.value;
    var pesoform = form.peso.value;
    var alturaform = form.altura.value;
    var gorduraform = form.gordura.value;

    var adcNovaLinha = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nomeform;
    pesoTd.textContent = pesoform;
    alturaTd.textContent = alturaform;
    gorduraTd.textContent = gorduraform;

    adcNovaLinha.appendChild(nomeTd);
    adcNovaLinha.appendChild(pesoTd);
    adcNovaLinha.appendChild(alturaTd);
    adcNovaLinha.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(adcNovaLinha);

        //console.log(nomeformTd); console.log(pesoformTd); console.log(alturaformTd); console.log(gorduraformTd);
}

















//console.log(form);
//console.log(btnAdicionar);