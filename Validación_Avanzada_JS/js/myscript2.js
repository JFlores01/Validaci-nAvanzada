
const formulario = document.getElementById('formulario__register');
const inputs = document.querySelectorAll('#formulario__register input');






//Declaración de las variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja_trasera-login");
var caja_trasera_register = document.querySelector(".caja_trasera-register");

console.log("hola");

const expresiones = {
   
    iban: /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/, // regex iban
    numtarjeta : /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/
}


const iban = document.getElementById('IBANreg');
const tarjeta = document.getElementById('numtarjetareg');
const verdadero = true;

formulario.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();

    

});

function checkInputs() {
   
    const ibanValue = iban.value.trim();
    const tarjetaValue = tarjeta.value.trim();

   

    if(ibanValue === ''){
        setError(contrasena, 'Por favor, rellene el IBAN');
        verdadero = false;
    }else if(!isIBAN(ibanValue)){
        setError(iban, 'Ingrese un IBAN válido.');
        verdadero = false;
    }else{
        setSuccesFor(iban);
    }

    if(tarjetaValue === ''){
        setError(tarjeta, 'Por favor, rellene el número de tarjeta.');
        verdadero = false;
    }else if(!isTarjeta(tarjetaValue)){
        setError(tarjeta, 'Ingrese un número de tarjeta válido.');
        verdadero = false;
    }else{
        setSuccesFor(tarjeta);
    }

    if(verdadero){
        window.location.replace("pagina1.html");
    }





}

    function setError(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccesFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }


    function isIBAN(iban){
        return /([a-zA-Z]{2})\s*\t*(\d{2})\s*\t*(\d{4})\s*\t*(\d{4})\s*\t*(\d{2})\s*\t*(\d{10})/.test(iban);
    }

    function isTarjeta(tarjeta){
        return /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/.test(tarjeta);
    }



function register() {
    if (window.innerWidth > 840) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.opacity = "0";
        caja_trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja_trasera_register.style.display = "none";
        caja_trasera_login.style.display = "block";
        caja_trasera_login.style.opacity = "1";
    }

}