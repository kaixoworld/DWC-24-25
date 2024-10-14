let selectDestinatarios= document.getElementById("destinat");

document.querySelector("input").addEventListener("click", ()=>{
    console.log("Dentro del botón 'enviar'");
    if (selectDestinatarios.value=="selecciona"){
        alert("Se te ha olvidado decir a quién envías el mensaje :(");
    }
    else if(document.getElementById("textoMensaje").value==""){
        alert("Te falta el mensaje :)");
    }else{
        //mensaje ok, con destinatario y texto válido
        let destinatario = selectDestinatarios[selectDestinatarios.selectedIndex].textContent;
        let mensaje = document.getElementById("textoMensaje").value;
        console.log(destinatario+"---"+mensaje);
        let parrafoDestinatario = document.createElement("p");
        parrafoDestinatario.innerHTML="Destinatario: "+destinatario;
        let parrafoTxt = document.createElement("p");
        parrafoTxt.innerHTML="Mensaje: "+mensaje;
        if(document.getElementById("mensaje"))
            document.getElementById("mensaje").innerHTML="";
        document.getElementById("listaDefinitiva").appendChild(parrafoDestinatario);
        document.getElementById("listaDefinitiva").appendChild(parrafoTxt);
    }
});
document.getElementsByTagName("input")[2].addEventListener("click", ()=>{
    //dentro del botón "a la nube"
     let mensajeNube = "";
     for(parrafo of document.getElementById("listaDefinitiva").getElementsByTagName("p"))
        mensajeNube += "\n" +parrafo.innerHTML;
     alert(mensajeNube);
});
document.getElementsByTagName("input")[1].addEventListener("click", ()=>{
    //botón eliminar
    location.reload();
    selectDestinatarios.selectedIndex =0;
    document.getElementById("textoMensaje").value="";
});
