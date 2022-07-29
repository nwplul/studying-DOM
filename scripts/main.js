// Pegando os elementos do formulário (Inputs)
const value_email = document.getElementById("email");
const value_password = document.getElementById("password");

const error_email = document.getElementById("error-email");
const error_password = document.getElementById("error-password");

// Usar o .value para pegar o valor digitado dentro dos inputs

// error_email.innerText = "Email invalido";
// error_email.classList.add("error-message");

function validate() {
    if (value_email.value && value_password.value) {
        value_email.classList.remove("error");
        value_password.classList.remove("error");

        error_email.innerText = "";
        error_password.innerText = "";
        return true;
    } else if (!value_email.value && !value_password.value) { // ! no começo retorna false
        value_email.classList.add("error");
        value_password.classList.add("error");
        // Adiciona mensagem de erro no email
        error_email.innerText = "Email invalido";
        error_email.classList.add("error-message");
        // Adiciona mensagem de erro na senha
        error_password.innerText = "Senha invalida";
        error_password.classList.add("error-message");
    } else if (value_email.value && !value_password.value) {
        value_password.classList.add("error");
        value_email.classList.remove("error");
        // Adiciona mensagem de erro na senha caso seja falso
        error_password.innerText = "Senha invalida";
        error_password.classList.add("error-message");
        // Remove a mensagem do email
        error_email.classList.remove("error-message");
        error_email.innerText = "";
    } else if (!value_email.value && value_password.value) {
        value_email.classList.add("error");
        value_password.classList.remove("error");
        // Adiciona mensagem de erro no email caso seja falso
        error_email.innerText = "Email invalido";
        error_email.classList.add("error-message");
        // Remove mensagem de erro da senha
        error_password.classList.remove("error-message");
        error_password.innerText = "";
    };
}

function submit() {
    if (validate()) {
        alert("Login realizado com sucesso!");
    };
}

