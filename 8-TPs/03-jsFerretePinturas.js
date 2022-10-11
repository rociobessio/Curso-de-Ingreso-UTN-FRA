/*3.
Bessio Rocio
	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{	
		//DE FAHRENHEIT A CENTIGRADOS:

	let temperatura,centigrados;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	//CALCULO:
	centigrados=(((temperatura-32)*5)/9);

	alert(temperatura+" fahrenheit son: "+centigrados+" centigrados.");

	
}

function CentigradosFahrenheit () 
{
		//DE CENTIGRADOS A FAHRENHEIT:

	let temperatura,fahrenheit;

	temperatura=document.getElementById('txtIdTemperatura').value;
	temperatura=parseInt(temperatura);

	fahrenheit=(((temperatura*9)/5)+32);

	alert(temperatura+" centigrados son: "+fahrenheit+" fahrenheit.");


	
}
