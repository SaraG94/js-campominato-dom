console.log('ciaoo');

//prendere il tasto Gioca
const buttonElement = document.getElementById('pulsante');
console.log(buttonElement);

//al click su play si genera griglia

buttonElement.addEventListener('click', startGame)
    console.log('click');
    

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
        divElement.setAttribute("style", "width:calc(100% / 10)");

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
        cella.addEventListener('click', function () {
            console.log('sei qui!');

            //aggiungere classe
            cella.classList.add('new-color');
            console.log(cella); 
        })
    }
    return 'Fine star game'
}

   
   


