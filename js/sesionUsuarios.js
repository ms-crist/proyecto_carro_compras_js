//se obtiene usuario y se almacena en localstorage

function ObtenerUsuarios(){
    let Usuarios = JSON.parse(localStorage.getItem('UsuariosLs'));
    
    if (Usuarios == null){
        Usuarios = 
        [// usuario, contraseña, para desarrollo
            ['user', '123']
        ];
    }
    return Usuarios;
} 

//se valida usuario y si existe se establece como usuario activo

function validarUsuario (vNombre, vPass) {
    let Usuarios = ObtenerUsuarios();
    let acceso = false;

    for(let i = 0; i < Usuarios.length; i++){
        if (vNombre == Usuarios[i][0] && vPass == Usuarios[i][1]){
            acceso = true;
            sessionStorage.setItem('UsuarioActivo', Usuarios[i][1]);
        }  
    }
    return acceso;
}