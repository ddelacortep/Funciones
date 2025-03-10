var nombreUno = "Maria";
var nombreDos = "Juan";

var porcentage = Math.random();
porcentage = porcentage * 100; 
porcentage = Math.floor(porcentage + 1);
console.log("Love calculador " + nombreDos + " y " + nombreUno + " = " 
    + Math.round(porcentage) + "%");
if (porcentage >= 80) {
    console.log("UAU, SOIS PERFECTOS")
} else if (porcentage >=50) {
    console-log("Bueno, esta muy bien, con el tiempo seguro mejora");
} else if (porcentage >= 25) {
    console.log("Parece que no hay muy buenas dinamicas...")
} else if (porcentage > 10) {
    console.log("no se ni como estais juntos... mejor romped ya")
} 

