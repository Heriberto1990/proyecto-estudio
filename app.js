const nombre = "Heriberto";
const edad = 30;
const salario = 600000;

//palabra reservada const (valor no cambia) let(valor si cambia),

// imprime el valor de la variable en consola 
console.log(nombre);
console.log(edad);
console.log(salario);

// 2 )ARRAYS guarda multiples gastos

const gastos = [2000,5000,12000,3000];

console.log(gastos);
console.log(gastos[0]);
console.log(gastos[2]);

// 3) Bucles 

//const gastos = [2000,5000,12000,3000];

let total =0;


for (let i = 0; i < gastos.length; i++)
{
    //su el total a lo que la variable tiene
    total += gastos[i];

}

console.log("Total", total); // consola = total 22000