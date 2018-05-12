console.log("Inicio del programa");

setTimeout(function() {
    console.log("primer Time out");
}, 3000);

setTimeout(function() {
    console.log("Segundo  Time out");
}, 0);

setTimeout(function() {
    console.log("tercer  Time out");
}, 0);

console.log("Fin del programa");