function adicionarCampoDosagem() {
    var ativosContainer = document.getElementById("ativosContainer");
  
    var novoCampoDosagem = document.createElement("div");
    novoCampoDosagem.classList.add("ativo");
    novoCampoDosagem.innerHTML = `
      <label for="dosagemInput">Dosagem do Ativo (%):</label>
      <input type="number" step="0.01" class="dosagemInput">
    `;
  
    ativosContainer.appendChild(novoCampoDosagem);
  }
  
  function calcular() {
    var quantidade = parseFloat(document.getElementById("quantidadeInput").value);
    var ativos = document.getElementsByClassName("ativo");
  
    var resultadosContainer = document.getElementById("resultadosContainer");
    var resultadoVeiculo = document.getElementById("resultadoVeiculo");
  
    resultadosContainer.innerHTML = "";
    resultadoVeiculo.textContent = "";
  
    var totalDosagem = 0;
  
    for (var i = 0; i < ativos.length; i++) {
      var dosagemInput = ativos[i].querySelector(".dosagemInput");
      var dosagem = parseFloat(dosagemInput.value);
  
      totalDosagem += dosagem;
  
      var resultado = (quantidade * dosagem) / 100;
  
      var resultadoElement = document.createElement("p");
      resultadoElement.textContent = "Quantidade do Ativo " + (i + 1) + ": " + resultado.toFixed(2) + " g";
      resultadosContainer.appendChild(resultadoElement);
    }
  
    var resultadoVeiculoValor = quantidade - ((quantidade * totalDosagem) / 100);
    resultadoVeiculo.textContent = "Quantidade do Veículo: " + resultadoVeiculoValor.toFixed(2) + " ml";
  }
  