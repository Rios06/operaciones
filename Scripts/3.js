let num1= prompt ("Ingrese numero 1");
let num2= prompt ("Ingrese numero 2");
let num3= prompt ("Ingrese numero 3");

if (num1 > num2 && num2 > num3) {
    console.log("el numero mayor es el numero " + num1);
} else if (num2 > num1 && num1 > num3) {
    console.log("El numero mayor es el numero " + num2);
} else {
    console.log("El numero mayor es el numero " + num3);
}
