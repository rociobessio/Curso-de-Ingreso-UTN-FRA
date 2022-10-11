/*1.
Bessio Rocio
TP 01
	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

	let precioUno,precioDos,precioTres,suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	alert("La suma de los tres productos es: "+suma);
}
function Promedio () 
{
	let precioUno,precioDos,precioTres,suma,promedio;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=(suma/3);
	alert("El promedio de los tres productos es: "+promedio);	
}
function PrecioFinal () 
{
	let precioUno,precioDos,precioTres,precioFinal,porcentaje,suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioTres=document.getElementById('txtIdPrecioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);

	suma=precioUno+precioDos+precioTres; //en suma se almacenan los tres precios
	porcentaje=((suma/100)*21);			//su suma se multiplica y luego divide
	precioFinal=suma+porcentaje;

	alert("La suma de los tres productos es: "+suma+", + el 21% del IVA: "+precioFinal);	
}