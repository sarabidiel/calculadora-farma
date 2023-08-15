function adicionarCampoAtivo() {
    var ativosContainer = document.getElementById("ativosContainer");
  
    var novoCampoAtivo = document.createElement("div");
    novoCampoAtivo.classList.add("ativo");
    novoCampoAtivo.innerHTML = `
      <label for="dosagemInput">Dosagem do Ativo:</label>
      <input type="number" step="0.01" class="dosagemInput">
      <select class="modoSelect">
        <option value="mg">mg</option>
        <option value="mcg">mcg</option>
      </select>
      <input type="number" step="0.01" class="fatorInput" placeholder="Fator de Correção">
    `;
  
    ativosContainer.appendChild(novoCampoAtivo);
  }
  
  function calcular() {
    var quantidade = parseFloat(document.getElementById("quantidadeInput").value);
    var ativos = document.getElementsByClassName("ativo");
  
    var resultadoContainer = document.getElementById("resultadoContainer");
    resultadoContainer.innerHTML = "";
  
    for (var i = 0; i < ativos.length; i++) {
      var dosagemInput = ativos[i].querySelector(".dosagemInput");
      var dosagem = parseFloat(dosagemInput.value);
  
      var modoSelect = ativos[i].querySelector(".modoSelect");
      var modo = modoSelect.value;
  
      var fatorInput = ativos[i].querySelector(".fatorInput");
      var fator = parseFloat(fatorInput.value);
  
      var resultado = quantidade * dosagem;
  
      if (modo === "mg") {
        resultado /= 1000;
      } else if (modo === "mcg") {
        resultado /= 1000000;
      }
  
      if (!isNaN(fator)) {
        resultado *= fator;
      }
  
      var resultadoTexto = document.createElement("p");
      resultadoTexto.textContent = "Ativo " + (i + 1) + ": " + resultado.toFixed(2) + "g";
      resultadoContainer.appendChild(resultadoTexto);
    }
  }
  