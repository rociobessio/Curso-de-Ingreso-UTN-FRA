/*Bessio Rocio

A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos 
y el promedio de peso xx ".
*/
function mostrar()
{
	//VARIABLES
  	let nombreUno;
  	let nombreDos;
  	let pesoUno;
  	let pesoDos;
  	let suma;
  	let resultado;

  	//INGRESO DE NOMBRES MEDIANTE PROMPT
  	nombreUno=prompt("Ingresa el primer nombre: ");
  	nombreDos=prompt("Ingresa el segundo nombre: ");

  	//INGRESO DE DATOS Y PARSEO DE ESTOS
  	pesoUno=prompt("Ahora el peso de "+nombreUno+" en KG.");
  	pesoDos=prompt("Ahora el peso de "+nombreDos+" en KG.");
  	pesoUno=parseInt(pesoUno);
  	pesoDos=parseInt(pesoDos);

  	//CALCULOS
  	suma=(pesoUno+pesoDos);
  	resultado=(suma/2);

  	//IMPRIMO EN PANTALLA
  	alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+" ,pesan: "+pesoUno+" y "+pesoDos+" kilos, que sumados son: "+suma+" kilos y el promedio de sus pesos es: "+resultado);


}
