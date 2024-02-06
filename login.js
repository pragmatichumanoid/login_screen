// Dummy user database
let users = [];

document.getElementById("but").addEventListener("click", function () {
    var username = document.getElementById("loginUsername").value;

    var password = document.getElementById("loginPassword").value;

    // Your login validation logic goes here
    let user = users.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        showCustomAlert("Login successful!", "success");
        // You can redirect the user to another page or perform any desired action here
    } else {
        showCustomAlert("Invalid username or password. Please try again.", "error");
    }
});

function showCustomAlert(message, type) {
    const alertElement = document.getElementById("customAlert");
    alertElement.textContent = message;
    alertElement.classList.add(type, "show");

    // Hide the alert after 3 seconds
    setTimeout(function () {
        alertElement.classList.remove("show");
    }, 3000);
}
