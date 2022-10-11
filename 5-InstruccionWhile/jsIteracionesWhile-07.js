/*
BESSIO ROCIO
07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

				07 bis
Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/
function mostrar()
{
	let contadorDeAlumnos;
	let notaIngresada;
	let sumaDeNotas;
	let sexoIngresado;
	let promedioDeNotas;
	let cantidadVaronesMasCinco;
	let banderaPrimerMujer;
	let notaPrimerMujer;
	let notaMasBaja;
	let notaMasBajaSexo;
	let cantidadDeAprobados;
	let cantidadMujeresMasCinco;

	//INICIALIZAR:
	contadorDeAlumnos=0;
	notaIngresada=0;
	sumaDeNotas=0;
	promedioDeNotas=0;
	notaMasBaja=0;
	cantidadVaronesMasCinco=0;
	banderaPrimerMujer=0;
	cantidadDeAprobados=0;

	while(contadorDeAlumnos<5)//5 la cantidad de alumnos
	{
		contadorDeAlumnos=contadorDeAlumnos+1;

		//el ingreso por prompt de las notas 
		//(validar entre 0 y 10)
		notaIngresada=prompt("Ingresa la nota: ");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("ERROR DE VALIDACION, reingresa la nota: ");
			notaIngresada=parseInt(notaIngresada);
		}
		//el sexo (validar el sexo “f” o “m”)
		sexoIngresado=prompt("Ingresa el sexo del alumno (f) o (m): ");
		while(sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("ERROR DE VALIDACION, reingrese el sexo del alumno: ");
		}

		sumaDeNotas=sumaDeNotas+notaIngresada;

		if(notaIngresada==1)
		{
			//b) La nota más baja y el sexo de esa persona.
			notaMasBaja=notaIngresada;
			notaMasBajaSexo=sexoIngresado;
		}
		else
		{
			if(notaIngresada>notaMasBaja)
			{
				notaMasBaja=notaIngresada;
				notaMasBajaSexo=sexoIngresado;
			}
		}

		//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if(sexoIngresado=="m")
		{
			if(notaIngresada>5)
			{
				cantidadVaronesMasCinco=cantidadVaronesMasCinco+1;
			}
		}
		else//sino
		{
			//d) la nota de la primer mujer ingresada.
			if(banderaPrimerMujer==0)
			{
				banderaPrimerMujer=1;
				notaPrimerMujer=notaIngresada;
			}
			else
			{
				//e) cantidad de aprobados de cada sexo (mas de 5)
				if(notaIngresada>5)
				{
					cantidadMujeresMasCinco=cantidadMujeresMasCinco+1;
				}	
			}
		}	
	}
	//a) El promedio de las notas totales.
		promedioDeNotas=sumaDeNotas/contadorDeAlumnos;

		//Todo en un alert?
	alert("La nota mas baja es: "+notaMasBaja+"/ La suma de notas es: "+sumaDeNotas+"/ La cantidad de varones con mas de 6 son: "+cantidadVaronesMasCinco+" y la cantidad de mujeres es: "+cantidadMujeresMasCinco+"/ La nota de la primer mujer es: "+notaPrimerMujer);
		//alert("La suma de notas es: "+sumaDeNotas);






}//FIN DE LA FUNCIÓN








/*
07
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
let contador;
	let acumulador;
	let respuesta;
	let numeroIngresado;

	//Inicializar:
	contador=0;
	acumulador=0;
	respuesta='si';//Cada vez que el usuario diga SI volvera a ingresa numeros.

	while(respuesta=="si")//mientras respuesta sea igual a si
	{
		numeroIngresado=prompt("Ingresa un numero: ");//ingresara un numero
		numeroIngresado=parseInt(numeroIngresado);

		acumulador=acumulador+numeroIngresado;//se suman los valores en el acumulador
		contador=contador+1;//cada vuelta se suma 1

		respuesta=prompt("Desea continuar?");//pregunta si quiere continuar 
	}


	document.getElementById('txtIdSuma').value=acumulador;
	document.getElementById('txtIdPromedio').value=acumulador/contador;
*/
