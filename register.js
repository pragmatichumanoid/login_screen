// Defina a variável users como uma lista vazia para armazenar os dados dos usuários
let users = [];

// Verifica se o elemento com ID "but" existe antes de adicionar o evento de clique
const signupButton = document.getElementById("but");
if (signupButton) {
    signupButton.addEventListener("click", function () {
        // Obtém os valores dos campos de entrada
        let email = document.getElementById("email").value;
        let username = document.getElementById("registerUsername").value;
        let password = document.getElementById("registerPassword").value;

        // Verifica se o nome de usuário já está em uso
        let existingUser = users.find(function (user) {
            return user.username === username;
        });

        if (existingUser) {
            showCustomAlert("Username already taken. Please choose a different one.", "error");
        } else {
            // Adiciona o novo usuário ao banco de dados
            users.push({ username: username, email: email, password: password });
            showCustomAlert("Registration successful! You can now login with your credentials.", "success");
        }
    });
}

function showCustomAlert(message, type) {
    const alertElement = document.getElementById("customAlert");
    if (alertElement) {
        alertElement.textContent = message;
        alertElement.classList.add(type, "show");

        // Esconde o alerta após 3 segundos
        setTimeout(function () {
            alertElement.classList.remove("show");
        }, 3000);
    }
}
