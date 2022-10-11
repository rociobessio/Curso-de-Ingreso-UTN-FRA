/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese su sexo: f(femenino) ó m(masculino): ");

	while(sexoIngresado!="f" && sexoIngresado!="m")//mientras sexo sea distinto a F y M 
	{
		sexoIngresado=prompt("ERROR DE VALIDACION, ingresa de nuevo: ");//Pedira la validacion de nuevo
	}


	document.getElementById('txtIdSexo').value=sexoIngresado;//Una vez validada imprime en pantalla.
}//FIN DE LA FUNCIÓN