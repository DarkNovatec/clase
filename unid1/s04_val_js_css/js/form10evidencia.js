const fnValidar10 = () => {
    let xName=document.getElementById("txtname").value;
    let xEdad=document.getElementById("txtedad").value;  

    if( xName=="" || /^\s+$/.test(xName)){
        alert("Ingrese NOMBRES y APELLIDOS...");
        return false;
        
    }
    if( xEdad=="" || /^\s+$/.test(xEdad)){
        alert("Ingrese edad...");
        return false;

    }
    let xpreferencia = document.getElementsByName("listCkeck[]");
    let cantckeck=0;
    for(i=0;i<xpreferencia.length;i++){
        if(xpreferencia[i].checked){
            cantckeck+=1;
        }
    }

    if(!(cantckeck>1)){
        alert("Seleccione 2 o mas opciones, no ..."+cantckeck);
        return false;
    }
    
    return true;
}
