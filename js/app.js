console.log('ciaoo');

//prendere il tasto Gioca
const buttonElement = document.getElementById('pulsante');
console.log(buttonElement);

//al click su play si genera griglia

buttonElement.addEventListener('click', startGame)
    console.log('click');
    
//array numero random bombe
let bombs = [];

//generare 16 numeri random diversi tra loro e minoriUgali all'ultima cella
while(bombs.length === 16){
    let numbBombs =parseInt(Math.floor(Math.random() * 100) + 1) ;
    console.log(numbBombs);
}
console.log(bombs)
//confrontare array con celle
//se clicco su cella compresa in bombs
    //ho perso

function startGame (){
    //dichiarare griglia vuota
    let grigliaElement = ''

    //creare griglia
    grigliaElement = document.getElementById('griglia');
    console.log(grigliaElement);

    grigliaElement.innerHTML = '';
    
    //definire lato e celle
    let latoGriglia = 10;
    console.log(latoGriglia);

    let numeroCelle = latoGriglia * latoGriglia;
    console.log(numeroCelle);

    let divElement = '';

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1
        console.log(num)

        divElement = document.createElement('div')
        
        //aggiungere classe
        divElement.classList.add('celle');

        //aggiungere style 
        divElement.setAttribute("style", `width:calc(100% / ${latoGriglia} )`);

        //stampare contenuto celle
        divElement.innerHTML=num;

        //stampare celle in html
        grigliaElement.append(divElement);
        console.log(divElement);   
    }

    //prendere celle
    const celleElements = document.querySelectorAll('.celle');
    console.log(celleElements);

    for (let i = 0; i < celleElements.length; i++) {
        let cella = celleElements[i];

        //al click sulle celle
        cella.addEventListener('click', onClick);
    }
    return 'Fine star game'
}

function onClick(event){
    console.log(event);
	console.log(event.target);
	console.log(this);

    const cella = this;
	console.log(cella.innerHTML);

    cella.classList.add('new-color');
	cella.removeEventListener('click', onClick);
}
   
   


