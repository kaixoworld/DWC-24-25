var passwordOk="1234", password;
var intentos =3;
do{
    password = prompt("Introduce tu contraseña: ");
    if(password != passwordOk){
        intentos--;
        alert("CONTRASEÑA INCORRECTA!! Tienes "+intentos + " intentos");
        if(intentos==0)
            alert("PERSONA USUARIA BLOQUEADA");
    }else{
        alert("¡ESTÁS DENTRO!");
    }
}while(password != passwordOk && intentos!=0);