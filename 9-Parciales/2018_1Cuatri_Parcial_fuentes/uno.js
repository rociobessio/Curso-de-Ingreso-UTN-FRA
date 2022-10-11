//Bessio Rocio	

function mostrar()
{
	//VARIABLES CTRL+D= cambiar el nombre de las variables
	let ancho,largo,perimetro,suma;

	//INGRESO DE DATOS MEDIANTE PROMPT:
	ancho=prompt("Ingresa el ancho: ");
	largo=prompt("Ingresa el largo: ");

	//PARSEAMOS LOS DATOS
	ancho=parseInt(ancho);
	largo=parseInt(largo);

	//CALCULAMOS
	perimetro=((largo+ancho)*2);

	//MOSTRAMOS EN PANTALLA
	alert("El perimetro del rectangulo es: "+perimetro);

}
