// Chiamo l'elemento html che conterrà i box ("box-contain")e gli assegno una variabile
const boxElement = document.querySelector(".box-contain");
console.log(boxElement);

// Creo un ciclo: fino che i <= 100: 

for (let i = 1; i <= 100; i++) {

    // Crea un elemento div;

    const boxItem = document.createElement("div");

    // Aggiungi all'elemento div la classe "box";

    boxItem.classList.add("box");
    console.log(boxItem);

    // Inserisci l'elemento "box" nella "boxElements";
    boxElement.append(boxItem);

    // Condizioni
    if (i % 3 == 0) {
        boxItem.classList.add("box-3");
        boxItem.innerHTML += "Fizz";
    } else if (i % 5 == 0) {
        boxItem.classList.add("box-5");
        boxItem.innerHTML += "Buzz";
    } else if ((i % 3 == 0) && (i % 5 == 0)) {
        boxItem.classList.add("box-5-3");
        boxItem.innerHTML += "FizzBuzz";
    } else {
        boxItem.classList.add("box-empty");
        boxItem.innerHTML += i;
    }
}


