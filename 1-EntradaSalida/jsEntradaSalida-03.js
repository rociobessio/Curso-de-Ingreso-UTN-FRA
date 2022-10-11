/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
					//RECABAR INFORMACION UTILIZANDO ID

	//Para almacenar variables se puede utilizar VAR o LET, pero VAR es obsoleto: 
	let nombreIngresado; 

	//Se recaba informacion tambien por ID:
	nombreIngresado=document.getElementById('txtIdNombre').value; 

	//Imprimimos en pantalla:
	alert(nombreIngresado); 

//39seg
}


