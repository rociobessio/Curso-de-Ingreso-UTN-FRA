/*
BESSIO ROCIO
IF 08

Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.


*/


function mostrar()
{

	let edadIngresada,estadoCivil;

	edadIngresada=document.getElementById('txtIdEdad').value;
	edadIngresada=parseInt(edadIngresada);

	estadoCivil="Casado","Divorciado","Soltero";
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edadIngresada<18 && estadoCivil!="Soltero")
	{

	}
	else
	{
		if(edadIngresada>17 && estadoCivil=="Soltero")
		{
			alert("Usted es soltero y no es menor");
		}
	}


}//FIN DE LA FUNCIÓN