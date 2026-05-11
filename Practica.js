const salarios = [15000,20000,50000,70000,7000];
const nombre = "Heriberto";
const edad = "36";
const ahorro = 0.15;
let ahorros = [];

console.log("Nombre = ",nombre);
console.log("Edad = ",edad);


let salarioTotal = 0;
let ahorroTotal = 0;

for(let i = 0; i < salarios.length; i++)
    {
       salarioTotal += salarios[i];
        
        ahorros[i] = salarios[i]*ahorro;
        console.log("Salario :", salarios[i]," Colones");
        console.log("Ahorro del salario ",i+1," : ",ahorros[i], " Colones");
     

    }

    console.log("Salarios total = ",salarioTotal);
   console.log("Ahorro total = ",salarioTotal*ahorro);

  
    
