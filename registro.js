
let product = "" 
    prompt("INGRESE EL PRODUCTO DESEADO: NEUMATICOS - LLANTAS - ACCESORIOS")
let state = "" 
    prompt("INGRESE LA PROVINCIA DE DESTINO")
let cant = 0
    parseInt(prompt("INGRESE LA CANTIDAD DE PRODCUTOS"))
for (let i=0; i<=99; i++){
    costo = product * state + cant
    console.log(product * state + cant);
}   
let costo = parseInt(alert("EL COSTO TOTAL DEL ENVIO ES $" + costo ))
    
        if(product.toLowerCase ()== "neumaticos"){
            console.log(product = 500)
        }else
        if(product.toLowerCase() == "llantas"){
            console.log(product = 400)
        }else
        if(product.toLowerCase() == "accesorios"){
            console.log(product = 300)
        }        

        if(state.toLowerCase ()==`neuquen`){
        console.log(state=0)
        }else
        if((state.toLowerCase()==`jujuy`) || (state.toLowerCase()==`salta`) || (state.toLowerCase()==`tucuman`) || (state.toLowerCase()==`catamarca`) || (state.toLowerCase()==`santiago del estero`) || (state.toLowerCase()==`la rioja`)) {
        console.log(state=2000)
        }else
            if((state.toLowerCase()==`cordoba`) || (state.toLowerCase()==`san juan`) || (state.toLowerCase()==`san luis`) || (state.toLowerCase()==`santa fe`)||(state.toLowerCase()==`buenos aires`)) {
                console.log(state=1500)
        }else
            if((state.toLowerCase()==`entre rios`)||(state.toLowerCase()==`corrientes`)||(state.toLowerCase()==`misiones`)){
            console.log(state=2500)
        }else
            if((state.toLowerCase()==`mendoza`) || (state.toLowerCase()==`la pampa`) || (state.toLowerCase()==`rio negro`)){
                console.log(state =500)
        }else
        if ((state.toLowerCase()==`chubut`) || (state.toLowerCase()==`santa cruz`) || (state.toLowerCase()==`tierra del fuego`)||(state.toLowerCase()==`islas malvinas`)){
            console.log(state=3000)
        }


    
        

            

        

    
    

/* for (let i=0; i<cantNotas; i++){
    nota = parseInt(prompt(`Ingrese la nota ${i+1}`))
    acum = acum + nota 
    console.log("acumulador parcial " + acum)
 } 
    prom = acum / cantNotas;
    console.log("La suma total es " + acum);
    console.log("El promedio es " + prom); */