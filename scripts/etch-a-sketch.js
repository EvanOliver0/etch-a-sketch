function mouseEnter(e) {
    let divEntered = e.target;
    console.log(`Entered div ${divEntered.textContent}`)
    divEntered.classList.add("colored");
}
let container = document.querySelector("#container");
for (let i=0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseenter", mouseEnter);
    newDiv.textContent = i;
    container.appendChild(newDiv);
}