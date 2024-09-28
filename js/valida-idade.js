export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    ValidityState(dataNascimento);
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new data(data.getUTCfullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}
