// Chiamo l'elemento html che conterrà i box ("box-contain")e gli assegno una variabile
const boxElement = document.querySelector(".box-contain");
console.log(boxElement);

// Creo un ciclo: fino che i = 100: 

for (let i = 0; i = 3; i++) {

    // Crea un elemento div;

    const boxItem = document.createElement("div");
    console.log(boxItem);

    // Aggiungi all'elemento div la classe "box";

    boxItem.classList.add("box");

    // Inserisci l'elemento "box" nella "boxElements";
    boxElement.append(boxItem);


}
