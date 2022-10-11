/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

	let precioLampara=35;
	let cantidadLamparas;
	let porcentaje;
	let precioFinal;
	let ingresoBruto;
	let descuento;
	let marcaLamparas;
	let ImporteIIBB;
	let precioConDescuento;

	cantidadLamparas=document.getElementById('txtIdCantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=document.getElementById('Marca').value;

	//HAY DISTINTAS FORMAS DE REALIZARLO, ABAJO FUERA DE LAS LLAVES SE ENCUENTRAS LAS OTRAS SOLUCIONES:


	switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
		break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}
			else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
					porcentaje=10;
				}
				else
				{
					porcentaje=5;
				}
			}
		break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				porcentaje=20;
			}
		break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		break;
		default:
			porcentaje=50;
		break;
	}

	ingresoBruto=(cantidadLamparas*precioLampara);
	descuento=ingresoBruto-((ingresoBruto*porcentaje)/100);
	precioConDescuento=ingresoBruto-descuento;

	document.getElementById('txtIdprecioDescuento').value=precioConDescuento;

	if(precioConDescuento>120)//E.Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
    {
        ingresoBruto=((precioConDescuento*10)/100);
        ImporteIIBB=(precioConDescuento+ingresoBruto);
        alert("Usted pago: "+ImporteIIBB+" de IIBB.");
    } 
}

/*

//---------------------------------------------------------------------------------------------------------

let precioLampara=35;
	let cantidadLamparas;
	let precioConDescuento;
	let precioSinDescuento;
	let descuento;
	let marcas;
	let ingresoBruto;

	cantidadLamparas=document.getElementById('txtIdCantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcas=document.getElementById('Marca').value;
	
	descuento=0;
		//PUNTO A
	if(cantidadLamparas>5)
	{
		descuento=50;
	}
	else 
	{		//PUNTO B
		if(cantidadLamparas==5 && marcas=="ArgentinaLuz")
		{
			descuento=40;
		}
		else
		{
			if(cantidadLamparas==5 && marcas!="ArgentinaLuz")
			{
				descuento=30
			}
			else
			{			//PUNTO C
				if(cantidadLamparas==4 && marcas=="ArgentinaLuz"||marcas=="FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					if(cantidadLamparas==4 && marcas!="JeLuz"||marcaLamparas!="HazIluminacion"||marcaLamparas!="Osram")
					{
						descuento=20;
					}
					else
					{			//PUNTO D
						if(cantidadLamparas==3 && marcas=="ArgentinaLuz")
						{
							descuento=15;
						}
						else
						{
							if(cantidadLamparas==3 && marcas=="FelipeLamparas")
							{
								descuento=10;
							}
							else
							{
								if(cantidadLamparas==3 && marcas!="JeLuz"||marcaLamparas!="HazIluminacion"||marcaLamparas!="Osram")
								{
									descuento=5;
								}
							}
						}
					}
				}
			}
		}
	}



	//CALCULOS:    
	precioSinDescuento=precioLampara*cantidadLamparas;
	precioConDescuento=precioSinDescuento-((precioSinDescuento*descuento)/100);

	//IMPRIMIR EN PANTALLA MEDIANTE ID
	document.getElementById('txtIdprecioDescuento').value=(precioConDescuento);

			//PUNTO E
	if(precioConDescuento>120)
	{
		ingresoBruto=precioConDescuento+((precioConDescuento*10)/100);
		alert("Usted pago: "+precioConDescuento+" y el total con el IIBB es :"+ingresoBruto+" de IIBB.");
	}

//-----------------------------------------------------------------------------------------------------------

							//MISMO EJERCICIO PERO OPTIMIZADO
							//INTENTO 01
	let precioLamparas=35;
	let cantidadLamparas;
	let porcentaje;
	let precioConDescuento;
	let precioSinDescuento;
	let descuento;
	let mensaje;
	let ingresoBruto;
	let marcaLamparas;
	let importeFinal;

	cantidadLamparas=document.getElementById('txtIdCantidad').value;
	cantidadLamparas=parseInt(cantidadLamparas);

	marcaLamparas=document.getElementById('Marca').value;

	porcentaje=0;

	if(cantidadLamparas>5) //A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	{
		porcentaje=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)//C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
			{
				if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
				{
					porcentaje=25;
				}
				else
				{
					porcentaje=20;
				}
			}
			else
			{
				if(cantidadLamparas==3)//D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						porcentaje=15;
					}
					else
					{
						if(marcaLamparas=="FelipeLamparas")
						{
							porcentaje=10;
						}
						else
						{
							porcentaje=5;
						}
					}
				}
			}
		}
	}

	ingresoBruto=(precioLamparas*cantidadLamparas);
	descuento=ingresoBruto-((ingresoBruto*porcentaje)/100);
	precioConDescuento=ingresoBruto-descuento;

	if(precioConDescuento>120)//E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
	{
		descuento=((precioConDescuento*10)/100);
		importeFinal=precioConDescuento+descuento;
		alert("Usted pago"+importeFinal+" de IIBB.");
	}

		document.getElementById('txtIdprecioDescuento').value=precioConDescuento;



//----------------------------------------------------------------------------------------------------------
					//RESUELTO CON SWITCH

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
		porcentaje=0;
		break;
		case 3:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
			porcentaje=15;
			break;
			case "FelipeLamparas":
			porcentaje=10;
			break;
			default:
			porcentaje=5;
			break;
		}
		break;
		case 4:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
			porcentaje=25;
			break;
			default:
			porcentaje=20;
			break;
		}
		break;
		case 5:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
			porcentaje=40;
			break;
			default:
			porcentaje=30;
			break;
		}
		break;
		default:
		porcentaje=50;
		break;
	}

//----------------------------------------------------------------------------------------------------------
									
									//RESUELTO CON IF DENTRO DE SWITCH

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
		porcentaje=0;
		break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}
			else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
					porcentaje=10;
				}
				else
				{
					porcentaje=5;
				}
			}
		break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				porcentaje=20;
			}
		break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		break;
		default:
		porcentaje=50;
		break;
	}	

//----------------------------------------------------------------------------------------------------------

								//SWITCH DENTRO DE IF:

	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		switch(cantidadLamparas)
		{
			case 1:
			case 2:
			porcentaje=0;
			break;
			case 3:
				if(marcaLamparas=="ArgentinaLuz")
				{
					porcentaje=15;
				}
				else
				{
					if(marcaLamparas=="FelipeLamparas")
					{
						porcentaje=10;
					}
					else
					{
						porcentaje=5;
					}
				}
			break;
			case 4:
				if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
				{
					porcentaje=25;
				}
				else
				{
					porcentaje=20;
				}
			break;
			case 5:
				if(marcaLamparas=="ArgentinaLuz")
				{
					porcentaje=40;
				}
				else
				{
					porcentaje=30;
				}
			break;
		}
	}

//-------------------------------------------------------------------------------------------------------------------------

	//SWITCH ADENTRO DE SWITCH:

	switch(cantidadLamparas)
	{
		case 1:
		case 2:
		porcentaje=0;
		break;
		case 3:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=15;
				break;
				case "FelipeLamparas":
					porcentaje=10;
				break;
				default:
					porcentaje=5;
				break;
			}
		break;
		case 4:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas":
					porcentaje=25;
				break;
				default:
					porcentaje=20;
				break;
			}
		break;
		case 5:
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
				break;
				default:
					porcentaje=30;
				break;
			}
		break;
		default:
		porcentaje=50;
		break;
	}

//-----------------------------------------------------------------------------------------------------------------------

//IF DENTRO DE SWITCH:
	switch(cantidadLamparas)
	{
		case 1:
		case 2:
		porcentaje=0;
		break;
		case 3:
		break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				porcentaje=20;
			}
		break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		break;
		default:
			porcentaje=50;
		break;
	}

//------------------------------------------------------------------------------------------------------------------------

	//SWITCH DENTRO DE IF:
	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		switch(cantidadLamparas)
		{
			case 1:
			case 2:
			porcentaje=0;
			break;
			case 3:
				switch(marcaLamparas)
				{
					case "ArgentinaLuz":
						porcentaje=15;
					break;
					case "FelipeLamparas":
						porcentaje=10;
					break;
					default:
						porcentaje=5;
					break;
				}
			break;
			case 4:
				switch(marcaLamparas)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						porcentaje=25;
					break;
					default:
						porcentaje=20;
					break;
				}
			break;
			case 5:
				switch(marcaLamparas)
				{
					case "ArgentinaLuz":
							porcentaje=40;
					break;
					default:
						porcentaje=30;
					break;
				}
			break;
		}
	}

//------------------------------------------------------------------------------------------------------------------------

	//HECHO CON IF:
	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
				{
					porcentaje=25;
				}
				else
				{
					porcentaje=20;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLamparas=="ArgentinaLuz")
					{
						porcentaje=15;
					}
					else
					{
						if(marcaLamparas=="FelipeLamparas")
						{
							porcentaje=10;
						}
						else
						{
							porcentaje=5;
						}
					}
				}
			}
		}
	}

//-------------------------------------------------------------------------------------------------------------------------

							//RESUELTO CON SWITCH DENTRO DE SWITCH:

switch(cantidadLamparas)
	{
		case 1:
		case 2:
		porcentaje=0;
		break;
		case 3:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
				porcentaje=15;
			break;
			case "FelipeLamparas":
				porcentaje=10;
			break;
			default:
				porcentaje=5;
			break;
		}
		break;
		case 4:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
				porcentaje=25;
			break;
			default:
				porcentaje=20;
			break;
		}
		break;
		case 5:
		switch(marcaLamparas)
		{
			case "ArgentinaLuz":
				porcentaje=40;
			break;
			default:
				porcentaje=30;
			break;
		}
		break;
		default:
		porcentaje=50;
		break;
	}

//----------------------------------------------------------------------------------------------------------------------

					//SWITCH DENTRO DE IF

	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
				break;
				default:
					porcentaje=30;
				break;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				switch(marcaLamparas)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						porcentaje=25;
					break;
					default:
						porcentaje=20;
					break;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					switch(marcaLamparas)
					{
						case "ArgentinaLuz":
							porcentaje=15;
						break;
						case "FelipeLamparas":
							porcentaje=10;
						break;
						default:
							porcentaje=5;
						break;
					}
				}
			}

		}
	}




/*	
	if(cantidadLamparas>5)
	{
		porcentaje=50;
	}
	else
	{
		if(cantidadLamparas==5)
		{
			switch(marcaLamparas)
			{
				case "ArgentinaLuz":
					porcentaje=40;
				break;
				default:
					porcentaje=30;
				break;
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				switch(marcaLamparas)
				{
					case "ArgentinaLuz":
					case "FelipeLamparas":
						porcentaje=25;
					break;
					default:
						porcentaje=20;
					break;
				}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					switch(marcaLamparas)
					{
						case "ArgentinaLuz":
							porcentaje=15;
						break;
						case "FelipeLamparas":
							porcentaje=10;
						break;
						default:
							porcentaje=5;
						break;
					}
				}
			}
		}
	}


//----------------------------------------------------------------------------------------------------------------------
									//IF DENTRO DE SWITCH
switch(cantidadLamparas)
	{
		case 1:
		case 2:
			porcentaje=0;
		break;
		case 3:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=15;
			}
			else
			{
				if(marcaLamparas=="FelipeLamparas")
				{
					porcentaje=10;
				}
				else
				{
					porcentaje=5;
				}
			}
		break;
		case 4:
			if(marcaLamparas=="ArgentinaLuz"||marcaLamparas=="FelipeLamparas")
			{
				porcentaje=25;
			}
			else
			{
				porcentaje=20;
			}
		break;
		case 5:
			if(marcaLamparas=="ArgentinaLuz")
			{
				porcentaje=40;
			}
			else
			{
				porcentaje=30;
			}
		break;
		default:
			porcentaje=50;
		break;
	}



*/