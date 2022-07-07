function fnValidar02()
{
    var xTexto  = document.getElementById("txtNombres").value;
    if (xTexto==""){
        alert("Escriba el texto...");
        return false;
    }

    //
    return  true;
}