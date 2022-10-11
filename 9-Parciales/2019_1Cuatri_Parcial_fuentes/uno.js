//Bessio Rocio
/*Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt 
y que muestre el perímetro por alert.*/

function mostrar()
{

	//VARIABLES
	let base;
	let perimetro;

	//INGRESO DE DATOS POR PROMPT Y PARSEO:
	base=prompt("Ingresa la base del triangulo equilatero: ");
	base=parseInt(base);

	//CALCULOS
	perimetro=(base*3);

	//IMPRIMIR EN PANTALLA
	alert("El perimetro del triangulo es: "+perimetro);


}
