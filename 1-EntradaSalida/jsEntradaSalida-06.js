/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
								//UTILIZACION DEL PARSEINT:

	//DECLARAMOS VARIABLES
	let numeroUno,numeroDos,suma;

	//OBTENEMOS LA INFORMACION DEL USUARIO MEDIANTE ID
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//parseInt TRANSFORMA LOS DATOS QUE INGRESA EL USUARIO A NUMERO Y LOS TRANSFORMA A ENTEROS:
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//OPERACION MATEMATICA:
	suma=numeroUno+numeroDos;

	//IMPRIMIR RESULTADO EN PANTALLA:
	alert("El resultado de la suma es: "+suma);

	
}

