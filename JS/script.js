// DECLARAMOS LA VARIABLE NUMERO.
let numero;

// PROMPT CON VERIFICACION DE QUE SE INGRESE UN NUMERO.
do {
    numero = prompt ("Ingrese un número.");
    }while (isNaN (numero));

// PARSEAMOS EL NUMERO PARA QUE SEA TIPO NUMBER Y ENTERO.
numero = parseInt(numero);

// FUNCION PARA SABER SI EL NUMERO INGRESADO ES PRIMO O NO.
function esPrimo(numero){    
    
// CONDICIONAL PARA EL 0, EL 1 Y EL 4.    
    if (numero == 0 || numero == 1 || numero == 4)
         return false;

// CICLO PARA CALCULAR NUMERO PRIMO.         
	for (x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;}

// CONDICIONAL PARA QUE EL RESULTADO NO SEA BOOLEANO.
if(esPrimo(numero)){
        alert("El número es primo.");
    }else{
        alert("El número NO es primo.");
    }
