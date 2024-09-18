/*Pide la edad a la persona
Si la edad introducida es menor de 18 saldrá el mensaje “Eres
menor de edad, porque tienes x años”; en caso contrario “Eres
mayor de edad, porque tienes x años” donde x es la edad
introducida previamente.*/ 
var edad = prompt("Dame tu edad y no me engañes: ");
/*console.log(edad);
if(edad<18)
    alert("Eres menor de edad porque tiene "+edad+" años");
else
    alert("Eres mayor de edad porque tiene "+edad+" años");
*/
/*usando una función para el ejercicio 5 podría ser: */
function mensajeEdad(edad){
    if(edad<18)
        alert("Eres menor de edad porque tiene "+edad+" años");
    else
        alert("Eres mayor de edad porque tiene "+edad+" años");
    
}
mensajeEdad(edad);

/*usando una función que devuelva datos sería*/
function mensajeEdad2(edad){
    if(edad<18)
        return "menor";
    else
        return "mayor";
}
console.log("Eres "+mensajeEdad2(edad)+ " de edad porque tiene "+edad+" años"); 