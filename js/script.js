const boxElement = document.querySelector(".box-contain");
console.log(boxElement);

for (let i = 0; i = 3; i++) {

    const boxItem = document.createElement("div");
    console.log(boxItem);

    boxItem.classList.add("box");
    boxElement.append(boxItem);


}
