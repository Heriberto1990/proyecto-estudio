/*
Objeto :es una agrupacion de información relacionada
Ejemplo
Nombre edad peso diagnostico

No tiene sentido manejarlo por aparte por que 
todo pertenece al mismo paciente 

*/

const paciente ={

    nombre: "Heriberto",
    edad: 45,
    peso: 82,
    diabetes: false

};

console.log(paciente);
//nombre = propiedad , Heriberto = valor

//Acceder a propiedades

console.log(paciente.nombre);

// un array lleno de objetos
const pacientes = [

{
    nombre:"Romsery",
    edad: 32
},{
    nombre:"Roberto",
    edad: 38
},{
    nombre:"Andrea",
    edad: 20
}
];

//Un arreglo reune informacion del mismo tipo
// un objeto almacena informacion relacionada pero no son la mismo

for(let i = 0; i<pacientes.length;i++){

    console.log("Nombre: ",pacientes[i].nombre);
    console.log("Edad: ",pacientes[i].edad);

};

//Practica 1
console.log("Practica 1");
const gastos =[

    {   descripcion:"Gasolina",
        monto: 25000,
        categoria: "transporte"
    },
    {
        descripcion:"2 kilos pollo",
        monto: 7000,
        categoria: "comida"

    },
    {

        descripcion:"arroz",
        monto: 80000,
        categoria: "comida"
    },

    {

        descripcion:"carnet estudiantil",
        monto: 2000,
        categoria: "educacion"
    }

];

let gastosTotal = 0;

for (let i = 0 ; i < gastos.length ; i++ ) {

    console.log("Descripción: ",gastos[i].descripcion);
    console.log("Monto: ", gastos[i].monto);
    gastosTotal += gastos[i].monto; 

}

console.log("Gastos Totales: ",gastosTotal);

console.log("Practica 2");
//Practica 2
// monstrar solo los gastos de la comida

function filtrarPorCategoria(gastos,categoria){
    let gastosTotalesPorCategoria =0;

    for ( let i = 0; i < gastos.length; i++ )
        {
            if ( gastos[i].categoria === categoria ){
            console.log(gastos[i].descripcion);
            console.log(gastos[i].monto);
           

             gastosTotalesPorCategoria += gastos[i].monto;
                }
         
        }
        if ( gastosTotalesPorCategoria != 0){
        return gastosTotalesPorCategoria;
        }
        else
            console.log("No se encontraron gastos con ese detalle: ",categoria);
}

filtrarPorCategoria(gastos,"comida");
