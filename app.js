const form=document.querySelector('.form-part');
const fristName=document.getElementById('fristName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('eamil-id');
const password=document.getElementById('password');


form.addEventListener('submit',function(e){
    
    if(fristName.value.trim()===""){
        fristName.parentElement.classList.add('err');
        showError(fristName,'Frist Name cannot be empty');
    }
    else{
        fristName.parentElement.classList.remove('err')
    }

    if(lastName.value.trim()===""){
        lastName.parentElement.classList.add('err');
        showError(lastName,'Last Name cannot be empty');
    }
    else{
        lastName.parentElement.classList.remove('err')
    }

    if(email.value.trim()===""){
        email.parentElement.classList.add('err');
        showError(email,'Email cannot be empty');
    }
    else if(!isEmail(email.value.trim())){
        email.parentElement.classList.add('err');
        showError(email,"Looks like this is not an email");
    }
    else{
        email.parentElement.classList.remove('err');
    }

    if(password.value===""){
        password.parentElement.classList.add('err');
        showError(password,'Password cannot be empty');
    }
    else{
        password.parentElement.classList.remove('err')
    }

    e.preventDefault();
})

function showError(element,errMsg){
    let errorEL=element.nextElementSibling;
    errorEL.innerHTML=errMsg;
    console.log(errorEL);
}

function isEmail(emailId){
    return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailId));
}