/*

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio
*/
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	//INICIALIZAMOS:
	contador=0;
	acumulador=0;
	


	while(contador<5)//mientras CONTADOR(las vueltas q tiene q pedir) sea menor q 5
	{
		numeroIngresado=prompt("Ingresa el numero: ");//seguira pidiendo numero
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;//suma los numeros ingresados
		contador=contador+1;//aca suma una vuelta

	}
	
	document.getElementById('txtIdSuma').value=acumulador; //imprime la suma
	document.getElementById('txtIdPromedio').value=acumulador/5;//imprime el promedio
}//FIN DE LA FUNCIÓN