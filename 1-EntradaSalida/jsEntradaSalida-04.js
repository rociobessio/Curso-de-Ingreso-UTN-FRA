/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
		//VARIABLES
		let nombreIngresado;

		//nombreIngresado YA ESTA PRESETEADO CON UN NOMBRE
		nombreIngresado="Rocio Soledad";


		//IMPRIME EL NOMBRE CON ID Y SE CONCATENA CON UN +
		document.getElementById('txtIdNombre').value="Tu nombre es: "+nombreIngresado;

}

