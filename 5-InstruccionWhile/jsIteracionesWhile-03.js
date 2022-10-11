/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("ingrese el número clave: ");

	while(claveIngresada!="utn750")
	{
		claveIngresada=prompt("ERROR DE VALIDACION, ingresa de nuevo: ");
	}
	alert("Muy bien la clave es: "+claveIngresada);
	
}//FIN DE LA FUNCIÓN
