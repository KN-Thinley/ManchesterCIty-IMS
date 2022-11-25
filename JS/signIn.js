const form = document.querySelector(".login-form")
const formEmail = document.querySelector("#email")
const formPassword = document.querySelector("#input")
const userName = document.querySelector('#name')

const isRequired = (value) => value === "" ? true : false;
const isBetween = (length,min,max) => length < min || length > max ? true : false;

const showError = (input,message) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = message;
    input.style.borderColor = "Red";
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    const error = formField.querySelector("small");

    error.innerText = "";
    input.style.borderColor = "#888888";
}
const validName = (username) => {
    const re = /^[A-Za-z\s]*$/
    return re.test(username)
}



// Utility functions


// Email validation
const isEmailValid = (email) => {
    const re = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return re.test(email)
}

const checkEmail = () => {
    let valid = false
    const Text = formEmail.value.trim();
    if (isRequired(Text)){
        console.log(1)
        showError(formEmail,"Email cannot be blank.")
    }
    else if (!isEmailValid(Text)){
        console.log(2)
        showError(formEmail,"Email is not valid.")
    }
    else {
        console.log(3)
        showSuccess(email);
        valid = true;
    }
    return valid;
}

// Password validation
const isPasswordSecure = (value) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(value);
}

const CheckPassword = () => {
    let valid = false;
    const text =formPassword.value.trim();

    if (isRequired(text)){
        showError(formPassword,"Password cannot be blank.")
    }
    else if (!isPasswordSecure(text)){
        showError(formPassword,`Invalid pasword`)
    }
    else{
        showSuccess(formPassword)
        valid = true;
    }
    return valid;
};

function name(){
    let valid = false;
    const max = 25, min = 3;

    const username = userName.value.trim();

    if(isRequired(username)){
        displayError(userName, 'Username cannot be blank!')
    }
    else if(!isBetween(username.length, min, max)){
        displayError(userName, `Username must be between ${min} and ${max}`)
    }
    else if(!validName(username)){
        displayError(userName, 'Username cannot contain any numbers or special characters')
    }
    else{
        displaySuccess(userName);
        valid = true;
    }
    return valid
    
}

form.addEventListener("submit",function (e) {
    console.log("E")
    e.preventDefault();

    let check1 = CheckPassword()
    let check2 = checkEmail()
    let isFormValid = check1 && check2;

    if(isFormValid){
        // resetForm()
        window.location.assign("../HTML/signIn.html")
    }
});

function resetForm(){
    password.value = "" 
    email.value = "" 
}