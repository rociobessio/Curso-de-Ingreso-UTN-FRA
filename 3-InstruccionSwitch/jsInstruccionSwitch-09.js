

function mostrar()
{
	let tarifaBase=15000;
	let tarifaConAumento;
	let tarifaSinAumento;
	let porcentaje;
	let estacionIngresada
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
					porcentaje=20;
				break;
				case "Mar del plata":
					porcentaje=-20;
				break;
				default:
					porcentaje=-10;
				break;
			}
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
				break;
				case "Mar del plata":
					porcentaje=20;
				break;
				default:
					porcentaje=10;
				break;
			}
		case "Otoño":
		case "Primavera":
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje=0;
				break;
				default:
					porcentaje=10;
				break;
			}
	}












	//CALCULO:
	tarifaSinAumento=(tarifaBase*porcentaje)/100;
	tarifaConAumento=tarifaBase+tarifaSinAumento;

	alert("El precio final es: "+tarifaConAumento);

}//FIN DE LA FUNCIÓN

/*
//----------------------------------------------------------------------------------------------------------------------------------------------

	switch(estacionIngresada)
	{
		case "Invierno":
		switch(destinoIngresado)
		{
		case "Bariloche":
			porcentaje=20;
		break;
		case "Mar del plata":
			porcentaje=-20;
		break;
		default:
			porcentaje=-20;
		break;
		}
		break;
		case "Verano":
		switch(destinoIngresado)
		{
			case "Bariloche":
				porcentaje=-20;
			break;
			case "Mar del plata":
				porcentaje=20;
			break;
			default:
				porcentaje=10;
			break;
		}
		break;
		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Cordoba":
				porcentaje=0;
			break;
			default:
				porcentaje=10;
			break;
		}
		break;
	}






*/