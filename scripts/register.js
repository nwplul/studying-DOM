const register_email = document.getElementById("registerEmail");
const register_name = document.getElementById("registerName");
const register_password = document.getElementById("registerPassword");
const confirm_password = document.getElementById("confirmPassword");

const error_email = document.getElementById("error-email");
const error_name = document.getElementById("error-name");
const error_password = document.getElementById("error-password");
const error_confirm_password = document.getElementById("error-confirm-password");

function validateEmail() {
    if (!register_email.value) {
        return false;
    }

    return true;
}

function validateName() {
    if (!register_name.value) {
        return false;
    }

    return true;
}

function validatePassword() {
    if (register_password.value === confirm_password.value) {
        return true;
    }

    alert("As senhas não são iguais")
}

function validates() {
    if (validateEmail() && validatePassword() && validateName()) {
        return true;
    }
    else if (!validateEmail() && !register_password.value && !validateName()) {
        error_email.innerText = "Obrigatório - Digite um email válido";
        error_email.classList.add("error-message");
        register_email.classList.add("error");

        error_name.innerText = "Obrigatório - Digite um nome";
        error_name.classList.add("error-message");
        register_name.classList.add("error");

        error_password.innerText = "Obrigatório - Digite uma senha";
        error_password.classList.add("error-message");
        register_password.classList.add("error");

        error_confirm_password.innerText = "Obrigatório - Digite uma senha";
        error_confirm_password.classList.add("error-message");
        confirm_password.classList.add("error");
    }
    else if (validatePassword()) {
        error_password.innerText = "Error - Senhas não são iguais";
    }
}

function submit() {
    if (validates()) {
        alert("Cadastro realizado com sucesso!")
    }
}
