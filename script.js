// link the button that i need from css 
let extractionButton = document.querySelector('#extract');

// link number to refresh after each extraction
let extractedNumberText = document.querySelector('#number');
//link message of end game
let endMessage = document.getElementById("message")

// let's take my 90 numbers from html
let numbers = document.querySelectorAll("span");
let numbersValues = [];
let numbersGone = [];

// let's fill the new array with value
for (i = 0; i < numbers.length; i++) {
    numbersValues.push(numbers[i].innerHTML);
}

console.log(numbersValues);

// let's extract numbers from the array with random function
function extraction() {
    if (numbersValues.length == 0) {
        endMessage.innerHTML = "Complimenti tutti i numeri sono stati estratti!!!";
        extractionButton.disabled = true;//to disable the button
        return;
    }

    let randomIndex = Math.floor(Math.random() * numbersValues.length)
    let numberExtracted = numbersValues[randomIndex];
    numbersValues.splice(randomIndex, 1);
    numbersGone.push(numberExtracted);
    return extractedNumberText.innerHTML = numberExtracted;
}






extractionButton.addEventListener("click", () => {
    extraction();
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i].innerHTML == extractedNumberText.innerHTML) {
            numbers[i].classList.replace("bg-white", "bg-danger");
            numbers[i].classList.replace("box_shadow", "box_shadow_coral");
            console.log(numbersGone)
        }
    }
})