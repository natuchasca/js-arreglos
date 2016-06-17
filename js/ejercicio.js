// EJERCICIOS ARREGLOS
// Quitar comentarios para visualizar uno a uno

/* 
// Ejercicio en clase
var v = ["a", "e", "i", "o", "u"];
console.log(v);

for (var i = 0; i < v.length - 1; i++) {
	console.log (v[i]);
};
*/


/*
// Pares de 10 numeros enteros mostrados en Array / Actividad de Blanca /  OK!
var numeros = [20, 45, 67, 54, 35, 58, 2, 12, 6, 25];
console.log(numeros);
numeros.reverse();

var pares = [];

for (var i = 0; i < numeros.length; i++) {
	if (numeros[i]%2==0) {
		pares.push(numeros[i]);
	}
};
 
console.log(pares);
*/

/* ************************************ */
/* ************************************ */

/*
//#1 CALCULANDO DNI /  OK!
  var dni = prompt("Ingresa tu DNI (sin letra)");
  var letra = prompt("Introduce letra de tu DNI");
  var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
  
  while ((dni<0)||(dni>99999999)){
    dni = prompt('El número introducido no es correto (debe estar entre 0 y 99999999), vuelva a teclearlo');
  }  

  var num = dni % 23;
  var letraId = letras[num];  
  
  if (letra != letraId){
    while(letra != letraId){    
      letra = prompt('La letra es incorrecta, pruebe de nuevo');            
    }
    alert('La letra es correcta');
  }    
  else{
     alert('La letra es correcta');
  }  
*/


/*
//#2 Añadir con push y for  /  OK!
var nombres = ['Laura', 'Camila', 'Erica', 'Mateo', 'Andrés', 'Mónica', 'Luis'];
console.log(nombres);


for (var i = 0 ; i < nombres.length ; i++) {
	agregar = prompt ("Ingrese un nombre","");
	nombres.push(agregar);
	alert(nombres);
	console.log(nombres);
 }; 
*/


/*
//#3 Creando Arrays /  OK!
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembe'];
alert("Los meses del año son: " + meses);
*/



/*
//#4 Opeaciones en Arrays  /  OK!
var valores = [true, 5, false, 'hola', 'adios', 2];
console.log(valores);
var numero1 = valores[1];
var numero2 = valores[5];
var texto1 = valores[3];
var texto2 = valores[4];
var bool1 = valores[0];
var bool2 = valores[2];
var resultado;

// textos
resultado = texto1 > texto2;
alert(texto1+ ' > ' +texto2+ ' = '+resultado);
console.log(texto1+ ' > ' +texto2+ ' = '+resultado);;  

resultado = texto1 < texto2;
alert(texto1+ ' < ' +texto2+ ' = '+resultado);
console.log(texto1+ ' < ' +texto2+ ' = '+resultado);

// booleanos true/false
resultado = bool1 || bool2;
alert(bool1+ ' OR ' +bool2+ ' = '+resultado);
console.log(bool1+ ' OR ' +bool2+ ' = '+resultado);

resultado = bool1 && bool2;
alert(bool1+ ' AND ' +bool2+ ' = '+resultado);
console.log(bool1+ ' AND ' +bool2+ ' = '+resultado);

// matematicas  
resultado = numero1 + numero2;
alert(numero1+ ' + '+numero2+ ' = '+resultado);
console.log(numero1+ ' + '+numero2+ ' = '+resultado);

resultado = numero1 - numero2;
alert(numero1+ ' - '+numero2+ ' = '+resultado);
console.log(numero1+ ' - '+numero2+ ' = '+resultado);

resultado = numero1 * numero2;
alert(numero1+ ' * '+numero2+ ' = '+resultado);
console.log(numero1+ ' * '+numero2+ ' = '+resultado);

resultado = numero1 / numero2;
alert(numero1+ ' / '+numero2+ ' = '+resultado);
console.log(numero1+ ' / '+numero2+ ' = '+resultado);

resultado = numero1 % numero2;
alert(numero1+ ' % '+numero2+ ' = '+resultado);
console.log(numero1+ ' % '+numero2+ ' = '+resultado);
*/ 



/*
//#5 Suma de numeros /  OK!
var numeros = [];

suma = 0;
for (n=1; n<11; n++) {
s = prompt('Ingrese número '+n+': ', '');
numeros.push(s);
suma+=parseInt(s);
}
alert ("la suma de " + numeros + " es " + suma);
*/



