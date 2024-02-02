const list =["mandola","halikali22"];

let id_che = document.getElementById("id_ch");
let pass_che = document.getElementById("pass_ch");

let message;

function popup(i,mes){
    if(i==0){
         message = document.getElementById("id1");

    }
    else{
         message = document.getElementById("pass1");
    }

    let newElement = document.createElement('p');
    newElement.classList.add('white')
    newElement.textContent=mes;
    message.appendChild(newElement);
    
}

function isSuccessive(password){
    for (let i = 0; i < password.length - 2; i++) {
        if (password.charCodeAt(i) + 1 === password.charCodeAt(i + 1) &&
            password.charCodeAt(i) + 2 === password.charCodeAt(i + 2)) {
            return "연속적인 숫자가 포함되어 있습니다.";
        }
    }
}

function isSet(password){
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);

    if (!hasSpecialCharacter || !hasNumber || !hasUpperCase) {
        return "특수문자, 숫자, 대문자를 모두 포함해야 합니다.";
    }
}

function id_check(){
    const id_ = document.getElementById("inp");
    list.forEach(sub =>{
        if(sub == id_.value){
            popup(0,"이미 있는 아이디입니다.");
        }
    })
}

function pass_check(){
    const id_ = document.getElementById("inp2");
    let password = id_.value;
    const mes = isSuccessive(password);
    const mes2 = isSet(password);
    if (mes2) {
        console.log(mes2);
        popup(1,mes2);
    }
    else if(mes){
        console.log(mes);
        popup(1,mes);
    }

}

id_che.addEventListener('click',id_check);

pass_che.addEventListener('click',pass_check);