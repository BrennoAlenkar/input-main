document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('[data-formulario]');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário até a validação
        
        // Limpa mensagens de erro anteriores
        const errorMessages = form.querySelectorAll('.mensagem-erro');
        errorMessages.forEach(msg => msg.textContent = '');

        let isValid = true;

        // Validação do Nome
        const nome = form.nome.value.trim();
        if (!nome) {
            isValid = false;
            form.nome.nextElementSibling.textContent = 'O nome é obrigatório.';
        }

        // Validação do E-mail
        const email = form.email.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            isValid = false;
            form.email.nextElementSibling.textContent = 'O e-mail é inválido.';
        }

        // Validação do RG
        const rg = form.rg.value.trim();
        if (!rg) {
            isValid = false;
            form.rg.nextElementSibling.textContent = 'O RG é obrigatório.';
        }

        // Validação do CPF
        const cpf = form.cpf.value.trim();
        const cpfRegex = /^\d{11}$/; // Apenas números e exatamente 11 dígitos
        if (!cpf || !cpfRegex.test(cpf)) {
            isValid = false;
            form.cpf.nextElementSibling.textContent = 'O CPF deve ter 11 números.';
        }

        // Validação da Data de Nascimento
        const aniversario = form.aniversario.value;
        if (!aniversario) {
            isValid = false;
            form.aniversario.nextElementSibling.textContent = 'A data de nascimento é obrigatória.';
        }

        // Validação dos Termos
        const termos = form.termos.checked;
        if (!termos) {
            isValid = false;
            form.termos.nextElementSibling.textContent = 'Você deve aceitar os termos.';
        }

        // Se todos os campos estiverem válidos, envia o formulário
        if (isValid) {
            form.submit(); // ou você pode fazer algo mais antes de enviar
        }
    });
});