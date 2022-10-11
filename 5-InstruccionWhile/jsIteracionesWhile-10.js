/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let cantidadPositivos;
	let cantidadNegativos;
	let cantidadCeros;
	let cantidadPares;
	let promedioPares;
	let promedioNegativos;
	let diferencia;

	//INICIALIZARLO:
	respuesta="si";
	sumaNegativos=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingresa el numero: ");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<0)
		{
			//1-Suma de los negativos.
			sumaNegativos=sumaNegativos+numeroIngresado;
			//4-Cantidad de negativos.
			cantidadNegativos=cantidadNegativos+1;
		}
		else
		{	
			if(numeroIngresado>0)
			{
			//2-Suma de los positivos.
			sumaPositivos=sumaPositivos+numeroIngresado;
			//3-Cantidad de positivos.
			cantidadPositivos=cantidadPositivos+1;
			}
			else
			{
				//5-Cantidad de ceros.
				cantidadCeros=cantidadCeros+1;
			}
		}
		if(numeroIngresado %2==0)
		{
			//6-Cantidad de números pares.
			cantidadPares=cantidadPares+1;
		}



		respuesta=prompt("desea continuar?");
	}//fin del while

	//7-Promedio de positivos.
	promedioPositivos=sumaPositivos/cantidadPositivos;

	//8-Promedios de negativos.
	promedioNegativos=sumaNegativos/cantidadNegativos;

	//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferencia=sumaPositivos-(sumaNegativos);



					//br SALTA UN RENGLON si no imprime junto
	document.write("<br>La suma de negativos es: "+sumaNegativos);
	document.write("<br>La suma de positivos es: "+sumaPositivos);
	document.write("<br>La cantidad de positivos es: "+cantidadPositivos);
	document.write("<br>La cantidad de ceros es: "+cantidadCeros);
	document.write("<br>La cantidad de numeros pares es: "+cantidadPares);
	document.write("<br>El promedio de numeros positivos es: "+promedioPositivos);
	document.write("<br>El promedio de numeros negativos es: "+promedioNegativos);
	document.write("<br>La diferencia entre los positivos y negativos es: "+diferencia);


}//FIN DE LA FUNCIÓN