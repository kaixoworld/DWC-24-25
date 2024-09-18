function pedirNumero(){
    let numero;
    do{
        numero = prompt("Introduce un número: ");
        if(numero == "" || isNaN(numero) || numero<0)
            alert("ERROR! Debes introducir un NÚMERO  POSITIVO");
    } while(numero == "" || isNaN(numero) || numero<0);
    return parseInt(numero);
}

function buscarMayor(numero1, numero2, numero3){
    let mayor= numero1;
    console.log(numero1+"-"+numero2+"-"+numero3+" mayor: "+mayor);
    if(numero2>mayor){
        mayor= numero2;
    }
    console.log(numero1+"-"+numero2+"-"+numero3+" mayor: "+mayor);
    if(numero3>mayor){
        mayor= numero3;
    }
    alert("El mayor entre "+numero1+" , "+ numero2+" ," + numero3+" es "+mayor);
}
var numero1 = pedirNumero();
var numero2 = pedirNumero();
var numero3 = pedirNumero();
console.log(numero1 + " - "+numero2+ " - "+numero3);
buscarMayor(numero1, numero2, numero3);