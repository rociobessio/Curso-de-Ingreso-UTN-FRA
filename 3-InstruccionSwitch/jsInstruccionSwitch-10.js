



function mostrar()
{
	let estacionIngresada; 
	let destinoIngresado;
	let mensaje;



	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
			case "Bariloche":
			mensaje="Se viaja.";
			break;
			default:
				mensaje="NO se viaja.";
			break;
		}
		break;
		case "Verano":
		switch(destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
			mensaje="Se viaja.";
			break;
			default:
			mensaje="NO se viaja.";
			break;
		}
		break;
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			mensaje="NO se viaja.";
			break;
			default:
			mensaje="Se viaja.";
			break;
		}
		break;
		default:
		mensaje="Se viaja.";
		break;
	}
	alert("La estacion ingresada fue: "+estacionIngresada+" y tu destino elegido es: "+destinoIngresado+", entonces: "+mensaje);
	
}//FIN DE LA FUNCIÓN