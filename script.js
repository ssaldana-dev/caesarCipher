const message = document.querySelector('#cipher_input');
const cipherButton = document.querySelector('#cipher_button');
const cipherOutput = document.querySelector('#cipher_output');
cipherButton.addEventListener('click', triggerCipher);
let rounds = 3;

let mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','Á', 'É', 'Í', 'Ó', 'Ú'];
let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','á', 'é', 'í', 'ó', 'ú'];

function triggerCipher () {
    let outputText = document.createTextNode(cipher(message.value, rounds).toString());
    cipherOutput.appendChild(outputText);
}

function cipher (text, key) {
    let cipheredText = '';

    for (let i = 0; i <= text.length; i++) {
        if (mayusculas.includes(text.charAt(i))) {
            if (mayusculas.indexOf(text.charAt(i)) + key > mayusculas.length) {
                cipheredText += mayusculas[(mayusculas.indexOf(text.charAt(i)) + key) - mayusculas.length];
            } else {
                cipheredText += mayusculas[mayusculas.indexOf(text.charAt(i)) + key];
            }
        } else if (minusculas.includes(text.charAt(i))) {
            if (minusculas.indexOf(text.charAt(i)) + key > minusculas.length) {
                cipheredText += minusculas[(minusculas.indexOf(text.charAt(i)) + key) - minusculas.length];
            } else {
                cipheredText += minusculas[minusculas.indexOf(text.charAt(i)) + key];
            }
        } else {
            cipheredText += text.charAt(i);
        }
    }

    return cipheredText;
}

