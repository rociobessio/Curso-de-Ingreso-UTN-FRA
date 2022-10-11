/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
					//REVISAR FORMULA
	let alambre,largo,ancho,perimetro;

	largo=document.getElementById('txtIdLargo').value;	
	ancho=document.getElementById('txtIdAncho').value;
	
	largo=parseInt(largo);
	ancho=parseInt(ancho);	

	perimetro=(largo+ancho)*2;
	alambre=perimetro*3;  //RECORDAR QUE 3 SON LOS 3 HILOS DE ALAMBRE

	alert("Se debe de comprar: "+alambre+" metros de alambre.");
	


}
function Circulo () 
{
	//REVISAR FORMULA
	
	let alambre,radio,perimetro;

	radio=document.getElementById('txtIdRadio').value;	
	radio=parseInt(radio);	

	perimetro=(2*(3.14*r)); //3.1416 =pi EXISTE LA FUNCION math.PI
	alambre=perimetro*3;  //RECORDAR QUE 3 SON LOS 3 HILOS DE ALAMBRE

	alert("Se debe de comprar: "+alambre+" metros de alambre.");
	

}
function Materiales () 
{
	let ancho,largo,baldosas,bolsaCemento,bolsaCal,superficie;



	ancho=document.getElementById('txtIdAncho').value;
	largo=document.getElementById('txtIdLargo').value;

	ancho=parseInt(ancho);
	largo=parseInt=(largo);

	bolsaCemento=((largo*ancho)*2);	
	bolsaCal=((largo*ancho)*3);

	alert("La cantidad total de bolsas de cemento es: "+bolsaCemento+" y la cantidad total de bolsas de cal es: "+bolsaCal);



}