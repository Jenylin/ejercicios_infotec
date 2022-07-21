//  let menuName = document.getElementById('menuName');
//  let webPageName = document.getElementById('webPageName');
//  let webPageUrl = document.getElementById('webPageUrl');
    let fieldset1 = document.getElementById('fieldset1');
    
// let generatedMenu = document.getElementById('generatedMenu');

class Menu {
    constructor(){
        this.title = "";
        this.pageNames = [];
        this.pageUrls = [];
    }

    setTitle(title, item) {
        this.title = `<h2>${title}</h2>`;
        document.getElementById(item).innerHTML = this.title;
    }

    add(name, url){
        this.pageUrls.push(url);
        this.pageNames.push(name);
    }

    show(item){
        let str = '<div><ul>';
        for (let x = 0; x < this.pageUrls.length; x++) {
            str += `<li><a href="${this.pageUrls[x]}">${this.pageNames[x]}</a></li><br>`;
        }
        str += '</ul></div>';
        document.getElementById(item).innerHTML += str;
    }
}


let n = 0;
function addNewPage() {
    fieldset1.innerHTML += `Ingresa un nombre para la página web.
    <input type="text" id="webPageName${n}" size="50" placeholder="Nombre de la página"/><br><br>
    Ingresa el url de la página web.
    <input type="text" id="webPageUrl${n}" size="50" placeholder="Url"/><br><br>`;
    n++;
}


function generateMenu() {
    const menu = new Menu();
    menu.setTitle(document.getElementById('menuName').value,'generatedMenu');
    menu.add(document.getElementById('webPageName').value, document.getElementById('webPageUrl').value);
    for (let i = 0; i < n; i++) {
        menu.add(document.getElementById('webPageName'+i).value, document.getElementById('webPageUrl'+i).value);     
    }
    menu.show('generatedMenu');
}

function clear() {
    document.getElementById('menuName').value = '';
    document.getElementById('webPageName').value = '';
    for (let i = 0; i < n; i++) {
        document.getElementById('webPageName'+i).value = '';    
    }
    document.getElementById('webPageUrl').value = '';
    for (let i = 0; i < n; i++) {
        document.getElementById('webPageUrl'+i).value = '';    
    }
}