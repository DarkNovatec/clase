function fnValidar02()
{
    ///validar texto///
	var xTexto =document.getElementById("txtTexto").value;
    if(xTexto=="" || /^\s+$/.test(xTexto)){
        alert("Inserte un Texto");
        return false;
    }

    ///validar genero///
    let xGenero = document.getElementsByName("rdGenero")
    let generoElegido = "";
    let generoSelecciondo = false;
    for(let i=0;i<xGenero.length;i++){
        if(xGenero[i].checked){
            if(i==0){
                generoElegido = "MASCULINO";
                generoSelecciondo = true;
            }if(i==1){
                generoElegido = "FEMENINO";
                generoSelecciondo = true;
            }
        }
    }
    ///seleccionar genero///
    if(generoSelecciondo){
        
    }else{
        alert("Seleccione un Genero!!");
        return false;
    }

    ///validar preferencia /// 
    xPreferencia = document.getElementsByName("txtPreferencia[]");
    cont=0;
    for(let i=0;i<xPreferencia.length;i++){
        if(xPreferencia[i].checked){
            cont++;
        }
    }

    ///seleccionar genero///
    if(!(cont==2)){
        alert("Seleccione 2 preferencias")
        return false;
    }
    return true;
}