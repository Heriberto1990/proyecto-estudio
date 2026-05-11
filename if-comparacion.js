// if significa que "Si esto ocurre..."
// si es verdadera lo ejecuta si es falta lo ignora 

const saldo = 1000;

if ( saldo > 0 ) {
  console.log("Tienes dinero disponible");}
  
  //if else
  // ejecuta otra opcion si el if no cumple
 
  if(saldo > 0)
  
  { console.log("Saldo positivo");
    
  }
  else {console.log("Saldo insuficiente ");
    
  }
  
  //else if 
  // lo recomendable es mucho poner 5 opciones (Si es mas de eso usar otras herramientas )
  const ahorro = 120000;
  
  if (ahorro < 50000){
    
    console.log("Ahorro bajo");
    
  } else if (ahorro < 100000){
    
    console.log("Buen ahorro");
  }else {
    
    console.log("Excelelente ahorro");
  }
  
  
  // OPERADORES IMPORTANTES 
  // Comparacion
  
 // < , > , <= , >= , === , !==
  
  // Se recomienda  === por que compara valor y tipo de dato 
  
  // Operadors logicos 
  
  // 1) && = y
  // se comple lo indicado si ambas condiciones son positivas 
  
  if(saldo > 0 && ahorro > 10000 ){}
  
  //2) || = o 
  // solo es necesario que una de las dos debe cumplirse 
  
  const tarjetaCredito = true;
  
  if (saldo > 0 || tarjetaCredito === true){}
  
  
  
  //Practica 1
  
  const gastos = [
    
    { detalle:"arroz",
      monto: 5000,
      categoria : "comida"
    },
    {
      detalle:"gasolina",
      monto: 8000,
      categoria : "transporte"
      
    },
    {
      detalle:"carne",
      monto: 8000,
      categoria : "comida"
      
    },
    {
      detalle:"matricula",
      monto: 80000,
      categoria : "educacion"
      
    }
    
    
    ];
   
    
    for ( let i = 0 ; i < gastos.length ; i++){
      
   
      
      if (gastos[i].monto > 20000){
        
        console.log("Gasto alto detectado: ",gastos[i].detalle," - ",gastos[i].monto)
      }
      
    }
  
  //Practica 2
  
  const ingresos = [2000,50000,8000,3000,4000];
  

  
  function evaluarFinanzas(gastos,ingresos){
    
    let gastosTotales = 0;
    let ingresosTotales = 0;
    let balance = 0;
    
     for ( let i = 0 ; i < gastos.length ; i++){
       
       gastosTotales += gastos[i].monto;
     }
     
      for ( let i = 0 ; i < ingresos.length ; i++){
      
        ingresosTotales += ingresos[i];
        
        
      }
      
      balance = ingresosTotales - gastosTotales;
      console.log(balance);
       console.log(ingresosTotales);
        console.log(gastosTotales);
      
      if (balance > 0){
        return "Buen balance" 
        
      }
      else if ( balance < 0){
        return "Gasto excesivos" 
      }
      
      else { return "Balance ajustado" }
      
      
    
  }
  
  console.log("Balance: ",evaluarFinanzas(gastos,ingresos));
  
  
  
  