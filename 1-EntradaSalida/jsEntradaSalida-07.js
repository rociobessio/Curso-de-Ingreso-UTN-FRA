/*
Bessio Rocio
e/s 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
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

function restar()
{
	//DECLARAMOS VARIABLES
	let numeroUno,numeroDos,resta;

	//OBTENEMOS LA INFORMACION DEL USUARIO MEDIANTE ID
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//parseInt TRANSFORMA LOS DATOS QUE INGRESA EL USUARIO A NUMERO Y LOS TRANSFORMA A ENTEROS:
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//OPERACION MATEMATICA:
	resta=numeroUno-numeroDos;

	//IMPRIMIR RESULTADO EN PANTALLA:
	alert("El resultado de la resta es: "+resta);	
}

function multiplicar()
{ 
	//DECLARAMOS VARIABLES
	let numeroUno,numeroDos,multi;

	//OBTENEMOS LA INFORMACION DEL USUARIO MEDIANTE ID
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//parseInt TRANSFORMA LOS DATOS QUE INGRESA EL USUARIO A NUMERO Y LOS TRANSFORMA A ENTEROS:
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//OPERACION MATEMATICA (* para multiplicar):
	multi=numeroUno*numeroDos;

	//IMPRIMIR RESULTADO EN PANTALLA:
	alert("El resultado de la multiplicacion es: "+multi);	
}

function dividir()
{
	//DECLARAMOS VARIABLES
	let numeroUno,numeroDos,divi;

	//OBTENEMOS LA INFORMACION DEL USUARIO MEDIANTE ID
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//parseInt TRANSFORMA LOS DATOS QUE INGRESA EL USUARIO A NUMERO Y LOS TRANSFORMA A ENTEROS:
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	//OPERACION MATEMATICA (/ para dividir):
	divi=numeroUno/numeroDos;

	//IMPRIMIR RESULTADO EN PANTALLA:
	alert("El resultado de la division es: "+divi);	
}

