const solucion = new Map();
solucion.set("lunes", "Astelehena");
solucion.set("martes", "Asteartea");
solucion.set("miércoles", "Asteazkena");
solucion.set("jueves", "Osteguna");
solucion.set("viernes", "Ostirala");
let emparejamientos=solucion.size;

document.getElementById("emparejar").addEventListener("click", ()=>{
    let palabraCast = document.getElementsByTagName("select")[1].value;
    let palabraEusk = document.getElementsByTagName("select")[0].value;
    console.log(palabraCast+"--"+palabraEusk);
    if(palabraCast=="0"||palabraEusk=="0")
        alert("Debes seleccionar una palabra de ambas lista para empezar a jugar");
    else{
        if (solucion.get(palabraCast)==palabraEusk){
            alert("Bien jugado!");
            //elimino la pareja de las listas y actualizo emparejamientos
            let contador=parseInt(document.getElementsByTagName("strong")[0].innerHTML)-1;
            document.getElementsByTagName("strong")[0].innerHTML=""+contador;
            let seleccionado = document.getElementsByTagName("select")[1].selectedIndex;
            document.getElementsByTagName("select")[1].removeChild(document.getElementsByTagName("select")[1].options[seleccionado]);
            seleccionado = document.getElementsByTagName("select")[0].selectedIndex;
            document.getElementsByTagName("select")[0].removeChild(document.getElementsByTagName("select")[0].options[seleccionado]);
        }else{
            alert("OHHHHH\nSigue intentándolo");
        }
        //actualizo índices listas 
        document.getElementsByTagName("select")[0].selectedIndex=0;
        document.getElementsByTagName("select")[1].selectedIndex=0;
    }

});

document.getElementById("reiniciar").addEventListener("click", ()=>{
    location.reload();
});
 