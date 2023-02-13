document.getElementById('log-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('input-email');
    const email = userEmail.value;
    const userPass = document.getElementById('input-pass');
    const pass = userPass.value;
    if(email === 'webprotap@gmail.com' && pass === '123protap@@'){
        window.location.href='bank.html'
    }
    else{
        alert('your email or password is not valid')
    }
});

// const user = document.getElementById('input-email', 'input-pass').addEventListener('keyup',function(event){
//     const input = event.target.Value;
//     const logInBtn = document.getElementById('log-btn');
//     if(input === email&&pass){
//         logInBtn.removeAttribute('disabled',false);
//     }    
//     else{
//         logInBtn.setAttribute('disabled',true);
//     }
// })