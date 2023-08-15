function calcular() {
    var volume = parseFloat(document.getElementById("volumeInput").value);
    var dosagem = parseFloat(document.getElementById("dosagemInput").value);
    var unidade = document.getElementById("unidadeSelect").value;
    var fator = parseFloat(document.getElementById("fatorInput").value);
  
    var resultado;
  
    if (unidade === "mg") {
      resultado = (volume * dosagem * fator) / 1000;
    } else if (unidade === "mcg") {
      resultado = (volume * dosagem * fator) / 1000000;
    } else if (unidade === "%") {
      resultado = (volume * dosagem * fator)/100 ;
    }

    var resultadosg= (resultado * 20)
  
    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.textContent = "Quantidade de Gotas: " + resultadosg.toFixed(2);
  }
  