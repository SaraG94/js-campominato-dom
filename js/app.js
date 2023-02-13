//prendere elemento risultato
const resultElement = document.getElementById('risultato');

//prendere il tasto Gioca
const buttonElement = document.getElementById('pulsante');

const punti = document.getElementById('numbero-punteggio');



//al click su play si genera griglia
buttonElement.addEventListener('click', startGame)
console.log('click');

let celleElements

//definire lato
let latoGriglia = 10;
console.log(latoGriglia);

let bombs = [];

let punteggio = 0;
    

function startGame (){
    //dichiarare griglia vuota
    let grigliaElement = ''

    //creare griglia
    grigliaElement = document.getElementById('griglia');
    console.log(grigliaElement);

    grigliaElement.innerHTML = '';
    
    //definire celle
    let numeroCelle = latoGriglia * latoGriglia;

    let divElement = '';

    bombs = generaBombe (16, 1, numeroCelle)

    for (let i = 0; i < numeroCelle; i++) {
        let num = i + 1

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
    celleElements = document.querySelectorAll('.celle');
    console.log(celleElements);

    for (let i = 0; i < celleElements.length; i++) {
        let cella = celleElements[i];

        //al click sulle celle
        cella.addEventListener('click', onClick);
    }


    return 'Fine star game'
}

//generare 16 numeri random 
function generaBombe(numeroBombe, min, max){
    //array numero random bombe
    let bombs = [];

    while(bombs.length < numeroBombe){
        let numbBombs = Math.floor(Math.random() * max) + 1;
        console.log(numbBombs);
    
        if(bombs.includes(numbBombs)===false){
            bombs.push(numbBombs);
        }
    }
    return bombs;
}

function gameOver(){
    //rimuovere eventListener da celle 
    for(let i = 0; i< celleElements.length; i++){
        const cella = celleElements[i];

        //confrontro celle e array
        let cellaBombs = bombs.includes(parseInt(cella.innerHTML));
        console.log(cellaBombs, 'boom');

        if(cellaBombs === true){
            // bg-color red su cella
            cella.classList.add('boom');        
            resultElement.innerHTML='Hai perso!'
        }
        cella.removeEventListener('click', onClick);
    }
}

function onClick(event){
    console.log(event);
	console.log(event.target);
	console.log(this);

    const cella = this;
    console.log(cella)
	console.log(cella.innerHTML);

    //confrontro celle e array
    let cellaBombs = bombs.includes(parseInt(cella.innerHTML));
    console.log(cellaBombs, 'boom');

    //se clicco su cella con bomba
    if(cellaBombs === true){
        
        gameOver()
        // bg-color red su cella
        cella.classList.add('boom');        
        resultElement.innerHTML='Hai perso!'
    } else{
        // controllo se utente vince
		let numeroCaselleSenzaBombe = latoGriglia * latoGriglia - bombs.length;
		if (punteggio === numeroCaselleSenzaBombe) {
			console.log('hai vinto');
		}

        cella.classList.add('new-color');

        punteggio++  ;        
        console.log(punteggio); 
        punti.innerHTML = punteggio;  
		
        cella.removeEventListener('click', onClick);
    }
}
   
   


