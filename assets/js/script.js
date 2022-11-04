var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmpassword")

var confirmForm = document.getElementById("confirmform")

confirmForm.addEventListener("click", checkPassword)

function checkPassword() {
    if (password.value != confirmPassword.value) {
        var wrongPassword = document.getElementById("wrongpassword")
        wrongPassword.style.display = "flex"
        wrongPassword.innerText = ("As senhas não são iguais")
        password.value = ""
        confirmPassword.value = ""
    } else {
        wrongPassword.style.display = "none"      
    }
}