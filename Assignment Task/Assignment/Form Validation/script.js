const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
        valid = false;
    } else {
        nameError.textContent = "";
        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");
    }

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        emailError.textContent = "Enter a valid email";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");
        valid = false;
    } else {
        emailError.textContent = "";
        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");
        valid = false;
    } else {
        passwordError.textContent = "";
        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");
    }

    if (valid) {
        alert("Form submitted successfully!");
    }
});
