//document.onload = function(){};

const tabSignUp = document.getElementById("tabSignUp");
const tabSignIn = document.getElementById("tabSignIn");
const tabBodySignUp = document.getElementById("tabBodySignUp");
const tabBodySignIn = document.getElementById("tabBodySignIn");

tabSignIn.addEventListener("click", function(){
    tabSignUp.classList.remove("active");

    tabSignIn.classList.remove("unactive");    

    tabSignIn.classList.add("active");     

    tabSignUp.classList.add("unactive");    
    
    tabBodySignUp.classList.remove("active");

    tabBodySignIn.classList.remove("unactive");

    tabBodySignIn.classList.add("active");

    tabBodySignUp.classList.add("unactive");
});

tabSignUp.addEventListener("click", function(){
    tabSignIn.classList.remove("active"); 

    tabSignUp.classList.remove("unactive");

    tabSignIn.classList.add("unactive");        

    tabSignUp.classList.add("active");    
    
    tabBodySignUp.classList.remove("unactive");

    tabBodySignIn.classList.remove("active");

    tabBodySignIn.classList.add("unactive");

    tabBodySignUp.classList.add("active");
});

const inputEmail = document.getElementById("inputEmail");
const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const inputUsername = document.getElementById("inputUsername")
const validUsername = /^[0-9]*[a-zA-Z]+[a-zA-Z0-9]*$/;
const inputPassword = document.getElementById("inputPassword");
const inputConfirmPassword = document.getElementById("inputConfirmPassword");
const emailUsername = document.getElementById("emailUsername");
const password = document.getElementById("password");
const btnSignUp = document.getElementById("btnSignUp");
const btnSignIn = document.getElementById("btnSignIn");

btnSignUp.addEventListener("click", function() {
    if (!inputEmail.value.match(validEmail)) {        
            inputEmail.classList.add("error");
        }else inputEmail.classList.remove("error");

    if (!(inputUsername.value.length >= 5 && inputUsername.value.length <= 40 && inputUsername.value.match(validUsername))) {
        inputUsername.classList.add("error");
    } else inputUsername.classList.remove("error");

    if (inputConfirmPassword.value != inputPassword.value) {
        inputConfirmPassword.classList.add("error");
    }else inputConfirmPassword.classList.remove("error");

    if (!(inputPassword.value.length >=8 && inputPassword.value.length <= 60)) {
        inputPassword.classList.add("error");
        inputConfirmPassword.classList.add("error");
    }else inputPassword.classList.remove("error");

    
});

btnSignIn.addEventListener("click", function(){
    if (!((emailUsername.value.match(validEmail)) || (emailUsername.value.length >= 5 && emailUsername.value.length <= 40 && emailUsername.value.match(validUsername)))){
        emailUsername.classList.add("error");
    }else emailUsername.classList.remove("error");

    if (!(password.value.length >=8 && password.value.length <= 60)) {
        password.classList.add("error");
    }else password.classList.remove("error");
});



/*for(i = 0; i < tabPanes.length; i++) {
    let x = i;
    tabPanes[x].addEventListener("click",function() {
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");

        tabPanes[x].classList.add("active");    

        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
					
		document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[x].classList.add("active");
    });
};*/