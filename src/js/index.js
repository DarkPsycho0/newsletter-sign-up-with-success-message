const inputEmail = document.querySelector('.input-email')
const submitButton = document.querySelector('.input-submit')
const errorMessage  = document.querySelector('.error-message')

submitButton.addEventListener('click', () =>{
    if (inputEmail.value === "") {
        errorMessage.classList.remove("none")
        inputEmail.classList.add("error")
    } else {
        errorMessage.classList.add("none")
        inputEmail.classList.remove("error")
    }
})