alert("Page running!");
   
var nombre;
nombre=prompt("Escriba su nombre");
document.write(nombre);

function sumar(){

   var num1 = 5;
   var num2 = 8;
  suma = num1 + num2;
  alert("La suma es: "+suma);
}

function Saludar(nombre, edad){
  
  this.nombre = nombre;
  this.edad = edad;  
  console.log("Hola mi nombre es: "+ this.nombre + " y tengo: " + this.edad + " años." );
}
