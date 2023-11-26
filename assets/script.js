// Função para gerar senha
function gerarSenha() {
    // Arrays com os caracteres possíveis
    let senha = [];
    const alfabetoMaiusculo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const simbolosEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '<', '>', ',', '.', '?', '/'];
    // Obter as opções selecionadas pelo usuário
    let maisculaCheckBox = document.getElementById('letrasMaiusculas');
    let minusculaCheckBox = document.getElementById('letrasMinusculas');
    let numerosCheckBox = document.getElementById('numeros');
    let simbolosEspeciaisCheckBox = document.getElementById('simbolosEspeciais');
    let tamanhoDaSenha = document.getElementById('tamanhoSenha').value;
    let campoSenha = document.getElementById('senhaInput');
    // Loop para construir a senha
    for (let i = 0; i <= tamanhoDaSenha; i++){
        if (maisculaCheckBox.checked) {
            let num = Math.floor(Math.random() * (alfabetoMaiusculo.length - 0)) + 0;
            senha.push(alfabetoMaiusculo[num]);
        }
        if (minusculaCheckBox.checked) {
            let num = Math.floor(Math.random() * (alfabetoMinusculo.length - 0)) + 0;
            senha.push(alfabetoMinusculo[num]);
        }
        if (numerosCheckBox.checked) {
            let num = Math.floor(Math.random() * (numeros.length - 0)) + 0;
            senha.push(numeros[num]);
        }
        if (simbolosEspeciaisCheckBox.checked) {
            let num = Math.floor(Math.random() * (simbolosEspeciais.length - 0)) + 0;
            senha.push(simbolosEspeciais[num]);
        }
    }
    // Função para embaralhar a senha
    function embaralharSenha(arr){
        let senhaEmbaralhada = arr.slice();
        for (let i  = 0; i < senhaEmbaralhada.length; i++){
            const j = Math.floor(Math.random() * senhaEmbaralhada.length);
            [senhaEmbaralhada[i], senhaEmbaralhada[j]] = [senhaEmbaralhada[j], senhaEmbaralhada[i]];
        }
        return senhaEmbaralhada;
    }
    // Embaralhar a senha e obter a versão final
    let senhaMisturada = embaralharSenha(senha);
    let senhaFinal = senhaMisturada.slice(0, tamanhoDaSenha).join("");
    campoSenha.value = senhaFinal;
}
// Obter o botão e adicionar um ouvinte de eventos para gerar senha ao clicar
let senhaBtn = document.getElementById('btnGerarSenha');
senhaBtn.addEventListener('click', function() {
    gerarSenha();
})
