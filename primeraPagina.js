console.log("JavaScript conectada con exito");
/*
//busca el input del usuario en html y toma su contenido
//si sale mal sale null ,js mal conectado , o nombre mal escrito
const usuariInput = document.getElementById("txtUsuario");

console.log(usuariInput.value);

// identifica el boton 
const boton = document.getElementById("btnLogin");

// se asigna una accion al boton 
boton.addEventListener("click", function(){

    console.log("Boton presionado");

});

*/
//practica 1
const usuarioInput = document.getElementById("txtUsuario");

const passwordInput = document.getElementById("txtPassword");

const boton = document.getElementById("btnLogin");

boton.addEventListener("click",function () {
    // trim() elimina espacios adelante y atras

  

    let usuario = usuarioInput.value.trim();

    if(usuario !== ""){
    console.log(usuario);
   
    } else {
        console.log("Usuario requerido");

    }

    let password = passwordInput.value.trim();

    if(password !== ""){
        console.log(password);
        
    } else {
        console.log("Contraseña requerida");}
    
        // no es necesario poner == true por que estas son booleanas
    if(usuario !== "" && password !== "")
      {console.log("Login exitoso");

      }else{
        console.log("Debes completar ambos campos")
      }

 
}

);