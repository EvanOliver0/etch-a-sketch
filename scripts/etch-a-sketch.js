function clearCurrentPad(pad) {
    while (pad.hasChildNodes()) {
        pad.removeChild(pad.lastChild);
    }
}
function createNewPad(pad, dimensions) {
    pad.style.gridTemplate = `repeat(${dimensions}, 1fr) / repeat(${dimensions}, 1fr)`
    for (let i=0; i < dimensions**2; i++) {
        let newDiv = document.createElement("div");
        newDiv.addEventListener("mouseenter", mouseEnter);
        pad.appendChild(newDiv);
    }
}
function mouseEnter(e) {
    let divEntered = e.target;
    console.log(`Entered div ${divEntered.textContent}`)
    divEntered.classList.add("colored");
}
function promptForDimensions() {
    let tries = 0;
    let message = "How many squares per side should your new pad have?"
    while (tries < 5) {
        let dimensions = +prompt(message);
        if (dimensions > 0) {
            return dimensions;
        }
        else {
            message = "Invalid input./n/nHow many squares per side should your new pad have?"
            tries++;
        }
    }
    alert("No valid input; resetting to 16x16")
    return 16;
}
function resetPad(pad) {
    let numSquares = promptForDimensions();
    clearCurrentPad(pad);
    createNewPad(pad, numSquares);
}
let pad = document.querySelector("#container");
createNewPad(pad, 16);
let button = document.querySelector("button");
button.addEventListener("click", function(e) {resetPad(pad)} );
