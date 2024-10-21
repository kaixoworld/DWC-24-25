//array preguntas
let preguntas = [
    "¿Qué sabe hacer un desarrollador front?",
    "¿Qué lenguaje sirve para hacer front?",
    "¿Qué lenguaje es interpretado por el navegador?",
    "¿Cómo se llama la forma de programar que cuida que tu código sea legible y entendible?",
    "¿Por qué nombre se conoce el último estándar de Javascript?"
    ];
    //array respuestas
let respuestas = [
    ["Ambos", "Solo Front-end", "Solo Back-end", "Ninguno"],
    ["PHP", "CSS3", "Javascript", "HTML5"],
    ["Javascript", "Java", "Cobol", "PHP"],
    ["Good Code", "Clean Code", "Top Code", "Easy Code"],
    ["ES6", "ES2015", "Ni ES6 ni ES2015", "ES6, ES2015"]
    ];
let solucion=["Solo Front-end", "Javascript", "Javascript", "Clean Code", "ES6, ES2015"];

let test=document.getElementById("test");
let aciertos=0;
let intentos=0;

let iniciar =()=>{document.getElementsByTagName("footer")[0].style.display="none";}

let reintentar =()=>{
    test.innerHTML="";
    empezar();
}

let empezar =()=>{
    /*cargo las preguntas y respuestas posibles de los arrays*/
    let index=0;
    for (let pregunta of  preguntas){
        let pPregunta = document.createElement("p");
        pPregunta.innerHTML = (index+1)+ ".-" + pregunta;
       test.appendChild(pPregunta);
       let texto_respuestas="";
        for (let respuesta of respuestas[index]){
            texto_respuestas += '<label><input type="radio" name="respuPreg'+(index)+ '" value="'+respuesta+'"/>'+ 
        respuesta + '</label> <br>';
        }
        test.innerHTML += texto_respuestas;
        index++;
    }
    document.getElementsByTagName("button")[0].style.display="none";
    document.getElementsByTagName("footer")[0].style.display="block";
}   
let comprobar =()=>{
   
    intentos++;
    aciertos=0;
    for (let index=0;index<preguntas.length;index++){
        if (document.querySelector('input[name="respuPreg'+index+'"]:checked')!=null){
            let elementoActivo = document.querySelector('input[name="respuPreg'+index+'"]:checked').value;
            if(elementoActivo==solucion[index])
                aciertos++;
        }
    }      
    /*añado fila al tbody*/

    let nuevaFila = document.createElement("tr");
    let nuevodato1 = document.createElement("td");
    nuevodato1.innerHTML = intentos;
    nuevaFila.appendChild(nuevodato1);
    let nuevodato2 = document.createElement("td");
    nuevodato2.innerHTML = aciertos + " de " +preguntas.length;
    nuevaFila.appendChild(nuevodato2);
    
    document.getElementsByTagName("tbody")[0].appendChild(nuevaFila);
    /*modifico dato a fila del tfoot*/
    console.log(document.getElementsByTagName("tfoot")[0].getElementsByTagName("td")[0].innerHTML);
    console.log(aciertos);
    
     if (document.getElementsByTagName("tfoot")[0].getElementsByTagName("td")[0].innerHTML=="" || aciertos>document.getElementsByTagName("tfoot")[0].getElementsByTagName("td")[0].innerHTML)
     document.getElementsByTagName("tfoot")[0].getElementsByTagName("td")[0].innerHTML=aciertos;
}


let rendirse =()=>{
    let respuesta = confirm("¿De verdad quieres rendirte?");
    if (respuesta==true){
        alert("OHHHHHHHHH!!!!!!\nBueno, la próxima te saldrá mejor seguro");
        for (let index=0;index<preguntas.length;index++){
            let index2=0;
            while(index2<4){
                console.log(document.getElementsByName("respuPreg"+index));
                let elemento = document.getElementsByName("respuPreg"+index)[index2].value;
                
                if(elemento==solucion[index]){
                    let etiqueta = document.getElementsByName("respuPreg"+index)[index2].parentElement;
                    etiqueta.style.color="#fff";
                    etiqueta.style.backgroundColor="green";
                    index2=4;
                }else
                    index2++;
            }    
        }      
    }else{
        alert("Así me gusta!!!!!!\nNunca gana quien no lo intenta");
    }
    
}
  
    






