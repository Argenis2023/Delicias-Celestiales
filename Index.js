document.addEventListener('DOMContentLoaded', function() { 
    obtenerPasteles();
 });

async function obtenerPasteles(){
    const url = '...';
    try {
        const pasteles = await fetch(url); 
        const pastelesJSON = await pasteles.json();
        console.log(pastelesJSON);
        recorreEInsertaPokemones(pastelesJSON.results);
    } 
    catch (error) {
        crearPaginaDeError();
    }
};

function recorreEInsertaPokemones(pasteles){
    const pasteleria = document.getElementById('pasteleria');
    pokemones.forEach(pastel => {
        const card = crearTarjetaDinamica(pastel);
        pasteleria.appendChild(card);
    });

};


function crearTarjetaDinamica(pastel) {
    const divCol = document.createElement('div');
    divCol.classList.add('col-lg-3 col-md-4 col-sm-6 mb-4');
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    const img = document.createElement('img');
    img.setAttribute('src', '');
    img.classList.add('card-img-top');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = pastel.name;
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const a = document.createElement('a');
    a.setAttribute('href', '#');
    a.classList.add('btn', 'btn-primary');
    a.textContent = 'Go somewhere';

    divCol.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(cardBody);
    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(a);

    return divCol;
};
function crearPaginaDeError() {
    const divError = document.createElement('div');
    const pasteleria = document.getElementById('pasteleria');
    divError.textContent = 'Error al cargar los pasteles';
    pasteleria.appendChild(divError);
    
}