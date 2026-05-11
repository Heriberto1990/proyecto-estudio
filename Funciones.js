
//Estructura de una función
function saludar(){

console.log("Hola Heriberto");

}

// llamamos a la función
saludar();

//uso de parametros
function saludar2(nombre){

    console.log("Hola " + nombre);
}
saludar2("Rosmery");
saludar2("Delber");
saludar2("Yamileth");

//return
 function calcularAhorro(salario){
    //si el return la funcion resive el parametro
    //hace el calculo pero no entrega nada
    return salario * 0.15;
 }

 const ahorro1 = calcularAhorro(50000);
 console.log(ahorro1);

 //Practica 

 function calcularBalance(ingreso,gastos){

    return  ingreso-gastos;

 }
console.log("Balance final: ",calcularBalance(800000,250000));

//Reto extra

function calcularSalarioConRebajo(salario,posicion){


    return  salario[posicion]-(salario[posicion]*0.13);


}

let salarios = [5000,40000,8000,4000,3000];

for (let i = 0; i< salarios.length;i++){

   let impuestoAplicado = calcularSalarioConRebajo(salarios,i);
   console.log("Salario ",i+1," con iva aplicado: ",impuestoAplicado);

}



