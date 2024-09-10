// Declaración de variables usando let
let hora = new Date().getHours(); //hora actual.
let nombre = "Bryan";
let suma = 0;
let edad = 25;
let ciudad = "caldas";
let isStudent = true;

// Declaración de variables usando const
const TITULO = "Funciones tipo flecha con JavaScript";
const PI = 3.1416;
const GRAVEDAD = 9.8;
const FECHA_NACIMIENTO = 1993;
const PAIS = "Colombia";

// Funciones tipo flecha

// Función sin parámetros
const title = () => TITULO;

// Función sin parámetros con validación
const horaActual = () => {
    if (hora < 12) {
        return "Bunos dias " + nombre;
    } else if (hora < 18) {
        return "Bunas tardes " + nombre;
    } else {
        return "Bunas noches " + nombre;
    }
};

// Función con un parámetro
const mayusculas = (texto) => texto.toUpperCase();

// Función con un parámetro - Suma de números desde 1 hasta el valor ingresado
const sumaNumeros = (num) => {
    if (typeof num !== "number" || num <= 0) {
        return "Debes ingresar un numero mayor a 0";
    } else {
        for (let i = 1; i <= num; i++) {
            suma += i;
        }
        return `La suma de los números de 1 a ${num} es ${suma}.`;
    }
};


// Función con tres parámetros
const informacion = (a, b, c) => a + " tiene " + b + " años y vive en " + c;

// Función con dos parámetros con switch
const calcular = (base, altura, figura) => {
    switch (figura) {
        case "Triángulo":
            const areaTriangulo = (1/2) * base * altura;
            return `El área del triángulo es ${areaTriangulo}.`;
        case "Paralelogramo":
            const areaParalelogramo = base * altura;
            return `El área del Paralelogramo es ${areaParalelogramo}.`;
        case "Trapecio":
            let base2 = 4;
            const areaTrapecio = (1/2) * (base * base2) * altura;
            return `El área del Trapecio es ${areaTrapecio}.`;
        default:
            return "Operacion invalida";
    }
};


console.log(title()); 
console.log(horaActual()); 
console.log(mayusculas(TITULO));
console.log(sumaNumeros(7));  
console.log(sumaNumeros(10));  
console.log(sumaNumeros(-2));  
console.log(informacion(nombre, edad, ciudad));
console.log(calcular(10, 5, "Trapecio"));
console.log(calcular(10, 5, "Cuadrado"));
