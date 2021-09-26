document.querySelector('#boton').addEventListener('click', iniciarSesion);

function iniciarSesion(){
    let sNombre = '';
    let sPass = '';
    let acceso = false;
    let button = document.querySelector("#boton");

    sNombre = document.querySelector('#campo').value;
    sPass = document.querySelector('#campo1').value;

    acceso = validarUsuario(sNombre, sPass);
    const divElement = document.querySelector("#user");
    
    if(acceso == true){
        divElement.textContent = `¡Hola ${sNombre}! 
        Agrega elementos a tu carro`;
        document.querySelector('#campo1').value= "";
        document.querySelector('#campo').value = "";
        button.disabled = true;
        botonComprar.disabled = false;
    } else {
        alert("Usuario o contraseña errónea");
    }
    console.log(acceso);
}



