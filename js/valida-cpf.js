export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");

    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log('Esse CPF não existe!');
    } else {
        console.log('Existe!');
    }
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ];

    return numerosRepetidos.includes(cpf);
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += Number(cpf[tamanho]) * multiplicador;  // Corrigido aqui
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != Number(cpf[9]);  // Corrigido aqui
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += Number(cpf[tamanho]) * multiplicador;  // Corrigido aqui
        multiplicador--;
    }

    soma = (soma * 10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != Number(cpf[10]);  // Corrigido aqui
}