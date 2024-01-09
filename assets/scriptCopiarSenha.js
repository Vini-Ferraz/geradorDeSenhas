/*Pop Up*/
let popUp = document.getElementById("popUpPositivo");
function removerPopUp() {
  popUp.classList.remove("popUpPositivoRevelar");
}

function copiarSenha() {
  let text = document.getElementById("senhaInput").textContent;

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      popUp.classList.add("popUpPositivoRevelar");
      setTimeout(removerPopUp, 2500);
    } catch (err) {
      alert("Failed to copy: ", err);
    }
  };
  copyContent();
}
let btnCopiar = document.getElementById("btnCopia");
btnCopiar.addEventListener("click", function () {
  copiarSenha();
});
