function fnValidar06()
{   
    var xGenero = document.getElementById("lstGenero").value;
    if(xGenero=="")
    {
        alert("seleccione GENERO...");
        return false;
    }

    var xResult=document.getElementById("txtResult").value;
    if(xResult=="" || xResult==0)
    {
        alert("Revice... Resultado ¿0 o VACIO?");
        return false;
    }
    /// Caso Contrario ///
    return true;
}

function verConteo(genero, mtzAlumnos)
{
	contadorGenero=0;
    if(mtzAlumnos.length>0){
        mtzAlumnos.forEach(element => {
            if(element[4]==genero){
                contadorGenero++;
            }
        });
    }
    document.getElementById("txtResult").value = contadorGenero;
}