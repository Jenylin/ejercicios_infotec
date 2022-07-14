let day, month, year;
day = document.getElementById('dia');
month = document.getElementById('mes');
year = document.getElementById('anho');
let fechaResultante = document.getElementById('fechaResultante');

function fecha(dia, mes, anho) {
    let date;
    date = `Hoy es ${dia.value} de `;
    switch (parseInt(mes.value)) {
        case 1:
            date += "enero";
            break;
        case 2:
            date += "febrero";
            break;
        case 3:
            date += "marzo";
            break;
        case 4:
            date += "abril";
            break;
        case 5:
            date += "mayo";
            break;
        case 6:
            date += "junio";
            break;
        case 7:
            date += "julio";
            break;
        case 8:
            date += "agosto";
            break;
        case 9:
            date += "septiembre";
            break;
        case 10:
            date += "octubre";
            break;
        case 11:
            date += "noviembre";
            break;
        case 12:
            date += "diciembre";
            break;
        default:
            break;
    }
    date += ` de ${anho.value}`;
    fechaResultante.innerHTML += date;
}

function borrar() {
    fechaResultante.innerHTML = "";
}