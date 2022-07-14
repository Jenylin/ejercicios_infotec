let num;
num = document.getElementById('numero');
let multTable = document.getElementById('multTable');
// let num = parseInt(prompt("Por favor, ingrese el número del que desea conocer su tabla de multiplicar:"));

//        multiplicar(num);

function multiplicar(n) {
    n = parseInt(n.value);
    for (let i = 1; i <= 10; i++) {
        multTable.innerHTML += `${n} * ${i} = ${n * i} <br>`;
    }
}

function borrar() {
    multTable.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("#numero").addEventListener("keypress", function(event){
        if(event.keyCode == 13){
            document.getElementById("miBotoncito").click();
        }
    });
});