var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmpassword")
var confirmForm = document.getElementById("confirmform")
var wrongPassword = document.getElementById("wrongpassword")

function checkPassword() {
    if (password.value != confirmPassword.value) {
        wrongPassword.style.display ="flex"
        wrongPassword.innerHTML = "As senhas não são iguais"
    } else {
        wrongPassword.style.display ="none"
    }
}

password.addEventListener("keyup", () => {
    if (password.value.length !=0) checkPassword();
})

confirmPassword.addEventListener("keyup", checkPassword)