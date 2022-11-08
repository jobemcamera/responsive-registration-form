var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmpassword")
var confirmForm = document.getElementById("confirmform")
var wrongPassword = document.getElementById("wrongpassword")
var fullName = document.getElementById("fullname")
var birth = document.getElementById("birth")
var email = document.getElementById("email")
var number = document.getElementById("number")

confirmForm.addEventListener("click", sucessForm)

/* Função que verifica se há conteúdos nos campos de input. Confirma os dados ao usuário*/
function sucessForm() {
    if (fullName.value.length == 0 || birth.value.length == 0 || email.value.length == 0 || number.value.length == 0 || password.value.length == 0 || confirmPassword.value.length == 0 ) {
        alert ("Você deve preencher todos os campos!")
    } else {
        alert ("Dados confirmados com SUCESSO!")
        fullName.value = ""
        birth.value = ""
        email.value = ""
        number.value = ""
        password.value = ""
        confirmPassword.value = ""
    }
} 

/* Função para que cria a máscara do telefone (xx)xxxxx-xxxx */
function phoneMask(number) {
    if (number.value.length == 0) {
        number.value = '(' + number.value;
    } 
    if (number.value.length == 3) {
        number.value = number.value + ')'
    }
    if (number.value.length == 9) {
        number.value = number.value + '-'
    }
}

/* Função que verifica se as senhas são iguais */
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

