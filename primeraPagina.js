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

const usuarioMostrar = document.getElementById("divUsuario");

const resultado = document.getElementById("divResultado");

const array = document.getElementById("divArray");

const gastos = ["Gasolina","Comida","Internet"];

let contenido = "";

for (let i = 0; i < gastos.length; i++){

    //'${}' esto se llama template literals 
    contenido += `<p>${gastos[i]}</p>`;

}

array.innerHTML = contenido;



boton.addEventListener("click",function () {
    // trim() elimina espacios adelante y atras

  

    let usuario = usuarioInput.value.trim();
    let password = passwordInput.value.trim();

    if(usuario !== ""){
    console.log(usuario);
   
    } else {
        resultado.innerHTML ="<p>Usuario requerido</p>";
    }

   

    if(password !== ""){
        console.log(password);
        
    } else {
        resultado.innerHTML ="<p>Contraseña requerida</p>";
       }
    
        // no es necesario poner == true por que estas son booleanas
    if(usuario !== "" && password !== "")
      {  resultado.innerHTML ="<p>Login exitoso</p>";
        usuarioMostrar.innerHTML = `<p>${usuario}</p>`;
        usuarioInput.value = "";
        passwordInput.value = "";

      }else{
        resultado.innerHTML ="<p>Debe completar ambos campos</p>";
      }

 
}


); // fin de funcion de la accion de boton 



// esto cambia contenido html dinamicamente (texto, html completo y etiquetas)
//  resultado.innerHTML = "<h2>Hola Heriberto</h2>";