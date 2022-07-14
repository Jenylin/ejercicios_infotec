let inString = document.getElementById('elementos');
let sorted = document.getElementById('sorted');

// Ordenar de menor a mayor.
function ordenar(identifier) {
    let vector = inString.value.split(',').map(Number);
    identifier = document.getElementById(arguments[0]);
    identifier.innerHTML = vector.sort((a,b) => {return a - b});
}

// Ordenar de mayor a menor.
function ordenarDos(identifier) {
    let vector = inString.value.split(',').map(Number);
    identifier = document.getElementById(arguments[0]);
    identifier.innerHTML = vector.sort((a,b) => {return b - a});
}

// Dar asignar el tipo de orden a las opciones del elemento select.
let ordenTipo = document.getElementById('ordenTipo');
function ejecutar() {
    if (ordenTipo.value == '1'){
        ordenar('sorted');
    }else if (ordenTipo.value == '2'){
        ordenarDos('sorted');
    }  
}

// Borrar el contenido del div con los números ordenados.
function borrar() {
    sorted.innerHTML = "";
}


// Obtener los números pares.
let paresRes = document.getElementById('pares');
function pares() {
    let vector = inString.value.split(',').map(Number);
    const pares = vector.filter(entrada => entrada%2==0);
    paresRes.innerHTML = pares;
}

// Obtener los números impares.
let imparesRes = document.getElementById('impares');
function impares() {
    let vector = inString.value.split(',').map(Number);
    const impares = vector.filter(entrada => entrada%2==1 || entrada%2==-1);
    imparesRes.innerHTML = impares;
}

// Obtener los múltiplos de tres.
let mTresRes = document.getElementById('mTres');
function mTres() {
    let vector = inString.value.split(',').map(Number);
    const mTres = vector.filter(entrada => entrada%3==0);
    mTresRes.innerHTML = mTres;
}


// Obtener los números que pertenecen a la sucesión de Fibonacci.
let fiboRes = document.getElementById('fibo');
var p = 1;
var q = 1;
var c;
let arreglo = [1,1];
 function fibo() {
    let vector = inString.value.split(',').map(Number);
    let max = Math.max(...vector)
    do{
        c = p + q;
        p = q;
        q = c;
        arreglo.push(c);
    }while (c < max)
}

function isThere(elemento) {
    for(let value of arreglo){
        if (value === elemento) {
            return true;
        }
    }
    return false;
    
}

function ejecutarFibo(){
    fibo();
    let vector = inString.value.split(',').map(Number);
    const fiboTrue = vector.filter(entrada => isThere(entrada)==true);
    fiboRes.innerHTML = fiboTrue;
}

// Obtener un número aleatorio entre 1 y el número ingresado.
let aleRes = document.getElementById('ale');
let entero = document.getElementById('int');
const numAleatorio = (num) => {
    let numEntero = parseInt(num.value);
    return Math.floor(Math.random()*numEntero)+1}

function dibujarAleatorio() {
    aleRes.innerHTML += numAleatorio(entero);    
}

// Borrar el número aleatorio.
function borrarDos() {
    aleRes.innerHTML = "";
}