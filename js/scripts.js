var formulario=document.getElementById("formulario");
var flag = true;
var radioCheck = false;
var radioValue;
var checkCheck = false;
var checkValue;
var radio;
var check;
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();

    var nombre=document.getElementById("nombre");
    var password=document.getElementById("password");
    radio=document.getElementsByName("option");
    check=document.getElementsByName("optionCb");
    
    if(nombre.value ==""){
        var errorNombre=document.getElementById("errorNombre");
        errorNombre.classList.remove("noVisible");
        errorNombre.classList.add("siVisible");
        flag = false;
    }

    if(password.value==""){
        var errorPasword=document.getElementById("errorPassword");
        errorPasword.classList.remove("noVisible");
        errorPasword.classList.add("siVisible");
        flag=false;
    }

    radio.forEach(element => {
        if (element.checked) {
            radioCheck = true;  
            radioValue = element.value;
        } 
    });
        
    if(radioCheck) {
        console.log("Aguas: " + radioValue);
    } else {
        var noAguas = document.getElementById("noAguas");
        noAguas.classList.remove("noVisible");
        noAguas.classList.add("siVisible");
        flag = false;
    }

    check.forEach(element => {
        if (element.checked) {
            checkCheck = true;
            checkValue = element.value;
        }
    });

    if(checkCheck) {
        console.log("Comida: " + checkValue);
    } else {
        var noComida = document.getElementById("noComida");
        noComida.classList.remove("noVisible");
        noComida.classList.add("siVisible");
        flag = false;
    }
    
    if(flag) {
        form.submit();
    }
    
    console.log(nombre.value);
    console.log(password.value);

    flag = true;
});

var nombre = document.getElementById("nombre");
nombre.addEventListener("click", (e) => {
    var errorNombre = document.getElementById("errorNombre");
    errorNombre.classList.remove("siVisible");
    errorNombre.classList.add("noVisible");
});

var password = document.getElementById("password");
password.addEventListener("click", (e) => {
    var errorPass = document.getElementById("errorPassword");
    errorPass.classList.remove("siVisible");
    errorPass.classList.add("noVisible");
});

var radio1 = document.getElementById("radio1");
radio1.addEventListener("click", (e) => {
    var noAguas = document.getElementById("noAguas");
    noAguas.classList.remove("siVisible");
    noAguas.classList.add("noVisible");
});

var radio2 = document.getElementById("radio2");
radio2.addEventListener("click", (e) => {
    var noAguas = document.getElementById("noAguas");
    noAguas.classList.remove("siVisible");
    noAguas.classList.add("noVisible");
});

var radio3 = document.getElementById("radio3");
radio3.addEventListener("click", (e) => {
    var noAguas = document.getElementById("noAguas");
    noAguas.classList.remove("siVisible");
    noAguas.classList.add("noVisible");
});

var check1 = document.getElementById("check1");
check1.addEventListener("click", (e) => {
    var noComida = document.getElementById("noComida");
    noComida.classList.remove("siVisible");
    noComida.classList.add("noVisible");
    flag = false;
});

var check2 = document.getElementById("check2");
check2.addEventListener("click", (e) => {
    var noComida = document.getElementById("noComida");
    noComida.classList.remove("siVisible");
    noComida.classList.add("noVisible");
    flag = false;
});

var check3 = document.getElementById("check3");
check3.addEventListener("click", (e) => {
    var noComida = document.getElementById("noComida");
    noComida.classList.remove("siVisible");
    noComida.classList.add("noVisible");
    flag = false;
});