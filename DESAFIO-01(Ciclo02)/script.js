document.getElementById("imcForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resultado = peso / (altura * altura);
    document.getElementById("resultado").innerHTML = "Seu IMC é: " + resultado.toFixed(2);
  });
  