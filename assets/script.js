let senha = [];

const alfabetoMaiusculo = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alfabetoMinusculo = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolosEspeciais = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '<', '>', ',', '.', '?', '/'];

function checar() {
    let maisculaCheckBox = document.getElementById('letrasMaiusculas');
    let minusculaCheckBox = document.getElementById('letrasMinusculas');
    let numerosCheckBox = document.getElementById('numeros');
    let simbolosEspeciaisCheckBox = document.getElementById('simbolosEspeciais');
}

for (let i = 0; i <= 0; i++){
    senha.push(alfabetoMaiusculo[i]);
    senha.push(alfabetoMinusculo[i]);
    senha.push(numeros[i]);
    senha.push(simbolosEspeciais[i]);
}

console.log(senha.join(""));