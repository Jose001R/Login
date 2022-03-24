let eyeOn = document.getElementById("eye-on");
let eyeOff = document.getElementById("eye-off");
let pass = document.getElementById("pass");

eyeOn.addEventListener("click", function(){
    if (pass.type == "password"){
        pass.type = "text";
        eyeOn.style.display = "none";
        eyeOff.style.display = "block";
    }
})

eyeOff.addEventListener("click", function(){
    if (pass.type == "text"){
        pass.type = "password";
        eyeOff.style.display = "none";
        eyeOn.style.display = "block";
    }
})


// Abilitar boton de enviar
let check = document.getElementById("check");
let submit = document.getElementById("submit");
let i = 0;

check.addEventListener("click", function (){

        if (i == 0){
            submit.disabled = false;
            i = 1;
        }else{
            submit.disabled = true;
            i = 0;
        }
})
