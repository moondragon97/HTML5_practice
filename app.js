const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("Please write your name");
    }else if(userName.length > 15){
        alert("Your name is too long.")
    }
}

loginButton.addEventListener("click", onLoginBtnClick);