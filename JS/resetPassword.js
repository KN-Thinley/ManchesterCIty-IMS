const btn = document.getElementById('show-btn')

function showPassword(){
    var password = document.getElementById('input');
    if (password.type === 'password'){
        password.type = 'text';
        btn.classList.remove('fa-eye-slash')
        btn.classList.add('fa-eye')
    }
    else {
        password.type = 'password'
        btn.classList.remove('fa-eye')
        btn.classList.add('fa-eye-slash')
    }
}

function showRetypePassword(){
    var password = document.getElementById('retypeInput');
    if (password.type === 'password'){
        password.type = 'text';
        btn.classList.remove('fa-eye-slash')
        btn.classList.add('fa-eye')
    }
    else {
        password.type = 'password'
        btn.classList.remove('fa-eye')
        btn.classList.add('fa-eye-slash')
    }
}