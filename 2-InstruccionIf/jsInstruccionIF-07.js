/*
BESSIO ROCIO
IF 07
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.

SABADO: IF 07 BIS:
*/
function mostrar()
{
	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	nombreIngresado=prompt("Ingresa tu nombre: ");

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edadIngresada<14)
	{
		mensaje="Feliz dia.";
		if(nombreIngresado=="Ricardo")
		{
			mensaje=mensaje+" Sos muy chiquito para ese nombre.";
		}
	}
	else
	{
		if(edadIngresada<18)
		{
			mensaje="Usted es adolescente.";
			if(edadIngresada==17)
			{
				mensaje=mensaje+" Ultimo año!";
			}
			if(nombreIngresado=="Violeta")
			{
				mensaje=mensaje+" Tu nombre es como el color.";
			}
			if(estadoCivil=="Divorciado")
			{
				mensaje=mensaje+" Toda una vida por delante.";
			}
		}
		else
		{
			if(edadIngresada>17)
			{
				mensaje="Tenes edad de laburar.";
				if(edadIngresada==33)
				{
					mensaje=mensaje+" Como Cristo.";
				}
				if(estadoCivil=="Soltero")
				{
					mensaje=mensaje+" A salir.";
				}
			}
			if(edadIngresada>59)
			{
				mensaje=" A jubilarse.";
			
				if(edadIngresada==88)
				{
					mensaje=mensaje+" Lindo numero.";
				}
				if(nombreIngresado=="Alfredo")
				{
					mensaje=mensaje+" Como el de QUEEN.";
				}
			}	
		}
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+" Casad@ quiere casa.";
		}
	}
if(edadIngresada % 2 ==0)
{
	mensaje=mensaje+" Tu edad es un numero par.";
}

	alert(mensaje)
























}//FIN DE LA FUNCIÓN

/*
let edadIngresada,estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil="Casado","Divorciado","Soltero";
	estadoCivil=document.getElementById('estadoCivil').value;
	

	if(edadIngresada<18 && estadoCivil!="Soltero")
	{
		alert("Es muy pequeño para NO ser soltero");
	}else
		{
			if(edadIngresada>17)//PARA DIFERENCIAR
			{	
				alert("Usted es mayor de edad y esta: "+estadoCivil);
			}
		}



					//ESTO ES EL EJERCICIO 07 BIS REALIZADO EL SABADO 12/02
	
	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	nombreIngresado=prompt("Ingresa tu nombre: ");
	estadoCivil=document.getElementById('estadoCivil').value;


	if(edadIngresada<14)//PUNTO A)si es menor de 13 , mostrar el mensaje “feliz día”.
	{
		mensaje="Feliz dia.";
		if(nombreIngresado=="Ricardo")
		{
			mensaje=mensaje+(" Muy chiquito para ese nombre.");
		}
	}
	else
	{
		if(edadIngresada<18) //ADOLESCENTE
		{
			mensaje="Usted es adolescente.";

			if(edadIngresada==17)
			{
				mensaje="Ultimo año.";
			}
			if(nombreIngresado=="Violeta")
			{
				mensaje=mensaje+" Como un color!!"; //Concatenar nombre
			}
			if(estadoCivil=="Divorciado")
			{
				mensaje=mensaje+(" Toda una vida por delante.");
			}
		}
		else
		{
			if(edadIngresada>17) //MAYORIA DE EDAD
			{
				mensaje="Tenes edad de laburar.";
			if(estadoCivil=="Soltero")
			{
				mensaje=mensaje+" A salir.";
			}
			if(edadIngresada==33)
			{
				mensaje="Como Cristo.";
			} 
			}
			if(edadIngresada>59)
			{
				mensaje="A jubilarse.";
				if(nombreIngresado=="Alfredo")
				{
					mensaje=mensaje+" Como el de QUEEN.";
				}
			}
			if(edadIngresada==88)
			{
				mensaje="Lindo numero.";
			}
		}
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+" Casad@ quiere casa.";
		}
		
	}
	if(edadIngresada % 2 ==0)
	{
		mensaje=mensaje+" Tu edad es par.";
	}
	alert(mensaje);




							//ESTO ES EL EJERCICIO 07 BIS REALIZADO EL SABADO 12/02 
												//OTRO INTENTO


	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	nombreIngresado=prompt("Ingresa tu nombre: ");

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edadIngresada<14)
	{
		mensaje="Feliz dia.";
		if(nombreIngresado=="Ricardo")
		{
			mensaje=mensaje+" Sos muy chiquito para ese nombre.";
		}
	}
	else
	{
		if(edadIngresada<18)
		{
			mensaje="Usted es adolescente.";
			if(edadIngresada==17)
			{
				mensaje="Ultimo año!!";
			}
			if(nombreIngresado=="Violeta")
			{
				mensaje=mensaje+" Tu nombre es como el color!";
			}
			if(estadoCivil=="Divorciado")
			{
				mensaje=mensaje+" Toda una vida por delante.";
			}
		}
		else
		{
			if(edadIngresada>17)
			{
				mensaje="Tenes que laburar.";
			if(estadoCivil=="Soltero")
			{
				mensaje=mensaje+" A salir.";		
				if(edadIngresada==33)
				{
					mensaje="Como Cristo.";
				}
			}
			else
			{				
				if(edadIngresada>59)
				{
					mensaje="A jubilarse.";
					if(nombreIngresado=="Alfredo")
					{
						mensaje=mensaje+" Como el de QUEEN.";
					}
				}
				if(edadIngresada>87)
				{
					mensaje="Lindo numero.";
				}
			}
			}
		}
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+" Casad@ quiere casa."
		}
	}
	if(edadIngresada % 2 ==0)
	{
		mensaje=mensaje+" Tu edad es par.";
	}

	alert(mensaje);

							//ESTO ES EL EJERCICIO 07 BIS REALIZADO EL SABADO 12/02 
												//OTRO INTENTO 02


	let edadIngresada;
	let mensaje;
	let nombreIngresado;
	let estaCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	nombreIngresado=prompt("Ingresa tu nombre: ");

	estadoCivil=document.getElementById('estadoCivil').value;

	if(edadIngresada<14)
	{
		mensaje="Feliz dia.";
		if(nombreIngresado=="Ricardo")
		{
			mensaje=mensaje+" Muy chiquito para ese nombre.";
		}
	}
	else
	{
		if(edadIngresada<18)
		{
			mensaje="Usted es adolescente.";
			if(edadIngresada==17)
			{
				mensaje="Ultimo año.";
			}
			if(nombreIngresado=="Violeta")
			{
				mensaje=mensaje+" Como el color!";
			}
			if(estadoCivil=="Divorciado")
			{
				mensaje=mensaje+" Toda una vida por delante.";
			}
		}
		else
		{
			if(edadIngresada>17)
			{
				mensaje="Tenes edad de laburar.";
			
				if(edadIngresada==33)
				{
					mensaje=mensaje+" Como Cristo.";
				}
				if(estadoCivil="Soltero")
				{
					mensaje=mensaje+" A salir.";
				}
			}
			if(edadIngresada>59)
			{
				mensaje=" A jubilarse.";
				if(edadIngresada==88)
				{
					mensaje=mensaje+" Lindo numero.";
				}
				if(nombreIngresado=="Alfredo")
				{
					mensaje=mensaje+" Como el de QUEEN.";
				}
			}
		}
		if(estadoCivil=="Casado")
		{
			mensaje=mensaje+" Casad@ quiere casa.";
		}
	}

	if(edadIngresada % 2 ==0)
	{
		mensaje=mensaje+" Tu edad es par.";
	}
alert(mensaje);
































*/