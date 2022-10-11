/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) 
y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
    let sueldoBruto;
    let numeroLegajo;
    let nacionalidad;

    //Inicializacion:
    edadIngresada=0;
    estadoCivilIngresado=0;
    sueldoBruto=0;
    numeroLegajo=0;


    //A.  Edad, entre 18 y 90 años inclusive.
    edadIngresada=prompt("Ingresa la edad: ");
    edadIngresada=parseInt(edadIngresada);
    while(edadIngresada<17 || edadIngresada>89)
    {
        edadIngresada=prompt("ERROR DE VALIDACION, ingresa la edad nuevamente: ");
        edadIngresada=parseInt(edadIngresada);
    }

    //B. Sexo, “M” para masculino y “F” para femenino
    sexoIngresado=prompt("Ingresa el sexo: 'F' o 'M': ");
    while(sexoIngresado!="f" && sexoIngresado!="m")
    {
        sexoIngresado=prompt("ERROR DE VALIDACION, ingresa el sexo nuevamente: ");
    }

    //C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
    estadoCivilIngresado=prompt("Ingresa el estado civil: 1-solter@, 2-casad@, 3-divorciad@ y 4-viud@");
    estadoCivilIngresado=parseInt(estadoCivilIngresado);

    while(estadoCivilIngresado!=1 && estadoCivilIngresado!=2 && estadoCivilIngresado!=3 && estadoCivilIngresado!=4)
    {
        estadoCivilIngresado=prompt("ERROR DE VALIDACION, ingresa el estado civil nuevamente: ");

    }
    //esta bien el if fuera del while? aunque funcione¿
    if(estadoCivilIngresado==1)
    {
         estadoCivilIngresado="Solter@";
    }
    else
    {
        if(estadoCivilIngresado==2)
        {
            estadoCivilIngresado="Casad@";
        }
        else
        {
            if (estadoCivilIngresado==3) 
            {
                estadoCivilIngresado="Divorciad@";
            }
            else
            {
                estadoCivilIngresado="Viud@";
            }
        }
    }

    //D. Sueldo bruto, no menor a 8000.
    sueldoBruto=prompt("Ingresa el sueldo: ");
    sueldoBruto=parseInt(sueldoBruto);

    while(sueldoBruto<7999)
    {
        sueldoBruto=prompt("ERROR DE VALIDACION, ingresa un sueldo mayor a $8000: ");
        sueldoBruto=parseInt(sueldoBruto);
    }

    //E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
    numeroLegajo=prompt("Ingresa el numero de legajo: ");
    numeroLegajo=parseInt(numeroLegajo);

    while(numeroLegajo<999)
    {
        numeroLegajo=prompt("ERROR DE VALIDACION, ingresa el numero de legajo nuevamente: ");
        numeroLegajo=parseInt(numeroLegajo);
    }

    //F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
    nacionalidad=prompt("Ingresa la nacionalidad: A(Argentin@s), E(Extranjer@s) y N(Nacionalizad@s): ");

    while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
    {
        nacionalidad=prompt("ERROR DE VALIDACION, ingresa la nacionalidad nuevamente: ");
    }
    if(nacionalidad=="A")
    {
        nacionalidad="Argentin@";
    }
    else
    {
        if(nacionalidad=="E")
        {
            nacionalidad="Extranjer@";
        }
        else
        {
            nacionalidad="Nacionalizad@";
        }
    }





    document.getElementById('txtIdEdad').value=edadIngresada;
    document.getElementById('txtIdSexo').value=sexoIngresado;
    document.getElementById('txtIdEstadoCivil').value=estadoCivilIngresado;
    document.getElementById('txtIdSueldo').value=sueldoBruto;
    document.getElementById('txtIdLegajo').value=numeroLegajo;
    document.getElementById('txtIdNacionalidad').value=nacionalidad;


}
