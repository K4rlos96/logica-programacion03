let numero = parseFloat(prompt("Ingrese un numero"));
if(!isNaN(numero)){
    let factorial = 1;
    for(let i = 1; i <= numero; i++){
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es ${factorial}`);
}
else{
    console.log("No se ingreso un numero valido");
}