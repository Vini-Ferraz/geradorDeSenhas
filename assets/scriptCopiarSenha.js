// Obtém a referência do elemento HTML com o ID "popUpPositivo"
let popUp = document.getElementById("popUpPositivo");
// Função para remover a classe que revela o pop-up
function removerPopUp() {
  popUp.classList.remove("popUpPositivoRevelar");
}
// Função para copiar a senha
function copiarSenha() {
  let text = document.getElementById("senhaInput").textContent;
  // Função assíncrona para copiar o conteúdo para a área de transferência
  const copyContent = async () => {
    try {
      // Utiliza a API do Clipboard para escrever o texto na área de transferência
      await navigator.clipboard.writeText(text);
      // Adiciona a classe que revela o pop-up positivo
      popUp.classList.add("popUpPositivoRevelar");
      setTimeout(removerPopUp, 2500);
    } catch (err) {
      // Exibe um alerta em caso de falha na cópia
      alert("Failed to copy: ", err);
    }
  };
  copyContent();
}
let btnCopiar = document.getElementById("btnCopia");
btnCopiar.addEventListener("click", function () {
  copiarSenha();
});
