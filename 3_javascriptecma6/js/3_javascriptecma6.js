const solucion = new Map();
solucion.set("Lunes", "Astelehena");
solucion.set("Martes", "Asteartea");
solucion.set("Miércoles", "Asteazkena");
solucion.set("Jueves", "Osteguna");
solucion.set("Viernes", "Ostirala");
let emparejamientos=solucion.size;

buscarPalabra =(palabras)=>{
    let index=0;
    for (element of palabras)
        if (element.checked)
            return element;
}


document.getElementById("emparejar").addEventListener("click", ()=>{
    let palabraCast = buscarPalabra(document.getElementsByName("castellano")).value;
    let palabraEusk = buscarPalabra(document.getElementsByName("euskera")).value;
    
   if(palabraCast=="0"||palabraEusk=="0")
        alert("Debes seleccionar una palabra de ambas lista para empezar a jugar");
    else{
        if (solucion.get(palabraCast)==palabraEusk){
            alert("Bien jugado!");
            let radioC = buscarPalabra(document.getElementsByName("castellano"));
            let labelC = radioC.nextElementSibling;
            document.getElementsByTagName("p")[2].removeChild(radioC);
            document.getElementsByTagName("p")[2].removeChild(labelC);
            
            let radioE = buscarPalabra(document.getElementsByName("euskera"));
            let labelE = radioE.nextElementSibling;
            document.getElementsByTagName("p")[3].removeChild(radioE);
            document.getElementsByTagName("p")[3].removeChild(labelE);
            
        }else{
            alert("OHHHHH\nSigue intentándolo");
        }
        console.log(document.getElementsByTagName("strong")[0].innerHTML);
        let contador=parseInt(document.getElementsByTagName("strong")[0].innerHTML);
        contador++;
        document.getElementsByTagName("strong")[0].innerHTML =""+ contador;
            
        //actualizo índices listas 
        /*document.getElementsByTagName("select")[0].selectedIndex=0;
        document.getElementsByTagName("select")[1].selectedIndex=0;*/
    }

});

document.getElementById("reiniciar").addEventListener("click", ()=>{
    location.reload();
});
 