// Este es un código sencillo de JavaScript que calcula el área de un triángulo aportado por Miguel Angel Lopez Lopez

// Definimos una función llamada calcularAreaTriangulo que toma la base y la altura como parámetros y devuelve el área del triángulo.
function calcularAreaTriangulo(base, altura) {
    // Calculamos el área del triángulo usando la fórmula: 1/2 * base * altura
    var area = (base * altura) / 2;
    // Devolvemos el área calculada
    return area;
}

// Definimos las variables base y altura con los valores correspondientes del triángulo
var base = 5;
var altura = 3;

// Llamamos a la función calcularAreaTriangulo con los valores de base y altura y almacenamos el resultado en la variable resultado.
var resultado = calcularAreaTriangulo(base, altura);

// Mostramos el resultado en la consola.
console.log("El área del triángulo con base", base, "y altura", altura, "es:", resultado);
