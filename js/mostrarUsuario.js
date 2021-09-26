muestraUsuario();

function muestraUsuario(){
    let user = document.querySelector('#user');

    let auser = JSON.parse (sessionStorage.getItem('UsuarioActivo'));

    let buser = auser.length;

    for (let i=0; i < buser; i++){
        let vistauser = document.createElement('h3');

        let nodouser = document.createTextNode(auser[i]);

        buser.appendChild(vistauser.appendChild(nodouser));

        user.appendChild(vistauser);
    }

   

}