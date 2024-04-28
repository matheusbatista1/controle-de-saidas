function updateStock() {
  const itemSelecionado = document.getElementById("itemSelect").value;
  const retirada = parseInt(document.getElementById("retiradaInput").value);
  const estoqueStatus = document.getElementById("estoqueStatus");
  if (itemSelecionado === "") {
    estoqueStatus.textContent = "";
    return;
  }
  axios
    .get("URL_API")
    .then((response) => {
      const data = response.data;
      const itemEncontrado = data.find((item) => item["ITEM"] === itemSelecionado);
      if (itemEncontrado) {
        const estoqueAtual = parseInt(itemEncontrado["ESTOQUE ATUAL"]);
        if (isNaN(retirada) || retirada <= 0) {
          estoqueStatus.textContent = "Por favor, informe a quantidade retirada.";
          estoqueStatus.classList.remove("valid");
          estoqueStatus.classList.add("neutro");
        } else if (retirada > estoqueAtual || estoqueAtual === 0) {
          estoqueStatus.textContent = "Não há quantidade suficiente em estoque.";
          estoqueStatus.classList.remove("valid");
          estoqueStatus.classList.add("invalid");
        } else {
          estoqueStatus.textContent = "Quantidade permitida.";
          estoqueStatus.classList.remove("invalid");
          estoqueStatus.classList.add("valid");
        }
      } else {
        estoqueStatus.textContent = "Item não encontrado na tabela.";
        estoqueStatus.classList.remove("valid");
        estoqueStatus.classList.add("invalid");
      }
    })
    .catch((error) => console.log(error));
}

function verificarEstoque() {
  const itemSelecionado = document.getElementById("itemSelect").value;
  const retirada = parseInt(document.getElementById("retiradaInput").value);
  const btn = document.getElementById("verificarBtn");
  const estoqueStatus = document.getElementById("estoqueStatus");
  if (itemSelecionado === "") {
    return mostrarPopup("Por favor, selecione um item.");
  }
  if (isNaN(retirada) || retirada <= 0) {
    return mostrarPopup("A quantidade retirada deve ser um número positivo.");
  }
  btn.disabled = true;
  axios
    .get("URL_API")
    .then((response) => {
      const data = response.data;
      const itemEncontrado = data.find((item) => item["ITEM"] === itemSelecionado);
      if (itemEncontrado) {
        const estoqueAtual = parseInt(itemEncontrado["ESTOQUE ATUAL"]);
        if (retirada > estoqueAtual || estoqueAtual === 0) {
          mostrarPopup("Não há quantidade suficiente em estoque.");
        } else {
          salvar(itemSelecionado, retirada);
        }
      } else {
        mostrarPopup("Item não encontrado na tabela.");
      }
    })
    .catch((error) => console.log(error))
    .finally(() => (btn.disabled = false));
}

function salvar(item, retirada) {
  const data = new Date().toISOString().slice(0, 10);
  axios
    .post("URL_API", {
      data: {
        "DATA DA SAÍDA": data,
        "ITEM RETIRADO": item,
        "RETIRADA ALOJAMENTO": retirada,
      },
    })
    .then((response) => {
      mostrarPopup("Salvo com sucesso!");
      setTimeout(() => location.reload(), 2000);
    })
    .catch((error) => console.log(error));
}

function mostrarPopup(mensagem) {
  const popup = document.getElementById("popup");
  popup.innerText = mensagem;
  popup.style.display = "block";
  setTimeout(() => (popup.style.display = "none"), 3000);
}