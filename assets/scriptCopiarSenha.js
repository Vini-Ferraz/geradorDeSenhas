function copiarSenha() {
  let text = document.getElementById("senhaInput").textContent;

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  copyContent();
}
let btnCopiar = document.getElementById("btnCopia");
btnCopiar.addEventListener("click", function () {
  copiarSenha();
});
