let example = '¡Qué oña mundo!';

let mayusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let vocalesConTildeMinusculas = ['á', 'é', 'í', 'ó', 'ú'];
let vocalesConTildeMayusculas = ['Á', 'É', 'Í', 'Ó', 'Ú'];

for (let i = 0; i <= example.length; i++) {
    if (mayusculas.includes(example.charAt(i))) {
        
    } else if (minusculas.includes(example.charAt(i))) {
        
    } else if (vocalesConTildeMayusculas.includes(example.charAt(i))) {
        
    } else if (vocalesConTildeMinusculas.includes(example.charAt(i))) {
        
    } else {
        
    }
}