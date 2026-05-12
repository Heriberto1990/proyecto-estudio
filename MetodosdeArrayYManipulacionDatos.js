// Metodos de arrays y manipulacion de datos

// Metodo :Es una funcion que ya viene 
// incorporada en algo 

//Array.push();

// push , ya existe dentro de arrays

// .push()

//Agrega elementos

const gastos = [];

//Agregar gatos dinamicamente 

gastos.push("Gasolina");
gastos.push("Comida");

// push = empujar 

console.log(gastos);

// .pop()

//Elimina el ultimo elemento

const gastos2 = ["gasolina","comida","internet"];

gastos2.pop();

console.log(gastos2);

// .lenght
// para saber cuantos elementos hay

console.log(gastos.length);

//.includes()

//verificar si algo existe
//RESPETA MAYOSCULAS Y MINISCULAS

console.log(gastos2.includes("Comida"));

//.find()

//busca un elemento especifico
// busca el primer elemento que compla una condicion 

const gastos3 = [
    {
        detalle: "Gasolina",
        monto: 20000
    },
    {
        detalle: "Comida",
        monto: 10000
    }
];

// gasto => gasto.detalle// es solo un puntero => 
    // devuelve el primer objeto que encuentre 
const resultado = gastos3.find(gasto => gasto.detalle === "Comida");

console.log(resultado);

//Practica 1

const pacientes = [];

pacientes.push("Heriberto");
pacientes.push("Roberto");
pacientes.push("Maria");

console.log(pacientes.length);

// Practica 2

console.log(pacientes.find(paciente => paciente === "Heriberto"));

//Funciones de la flecah =>

// es una forma mas moderna y compacta de escribir funciones


//funcion tradicional

function sumar (a,b){
    return a +b;
}

//funcion flecha

const sumar2 = (a,b) => {return a +b;}

console.log(sumar(1,2));
console.log(sumar2(1,2));

// la flecha simplemente define la funcion moderna 
//javascript asume el return , si usamos {} si habra que poner el return
const duplicar = numero => numero * 2;

console.log(duplicar(5));

//.map()

// transforma arrays

const salarios = [1000,2000,3000];

const dobles = salarios.map(salarios => salarios *2);

console.log(dobles);

// map crea un nuevo array , no modifica el original 

//.filter()

//filtra elementos

const salarios2 = [1000, 5000, 12000, 800];

const altos = salarios2.filter(salario => salario > 5000);
// si no encuentra nada devuelve un array vacio 

// diferencias entre .find() y .filter()
//.find()  , devuelve un elemento
// .filter() , devuelve varios elementos(array)

console.log(altos);

// con objetos

const pacientes2 = [
    {
        nombre: "Ana",
        edad: 20
    },
    {
        nombre: "Carlos",
        edad: 50
    },
    {
        nombre: "Luis",
        edad: 65
    }
];

const mayores = pacientes2.filter(
    paciente => paciente.edad > 10
);
// lo que cambia es en especificar justo la propiedad 

// recuerda que mayores es un array con todos los objetos filtrados
console.log(mayores);

//practica 1

const gastoDelMes = [{

    detalle : "educacion",
    monto : 1000

},{
     detalle : "educacion",
    monto : 2000
},{

    detalle : "carro",
    monto : 7000
}];

const gastosFiltrados = gastoDelMes.filter(gasto => gasto.detalle === "educacion");

console.log(gastosFiltrados);

// practica 2
const impuestos = 0.13;
const impuestosAplicados = gastoDelMes.map(gasto => gasto.monto + (gasto.monto * impuestos));

console.log(impuestosAplicados);