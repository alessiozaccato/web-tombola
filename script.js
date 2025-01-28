// link the buttons that i need from css 
let extractionButton = document.querySelector('#extract');
let endGameButton = document.querySelector('#endGame');
// link number to refresh after each extraction
let extractedNumber = document.querySelector('#number');

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
function extraction(numberExtracted) {
    for (i = 0; i < numberExtracted.length; i++) {
        numberExtracted[i] = Math.floor(Math.random() * 90) + 1;
        extractedNumber.innerHTML = numberExtracted[i];
        if (!(numbersGone.includes(numberExtracted[i]))) {
            numbersGone.push(numberExtracted[i]);

        }

        return numbersGone;
    }


}

extractionButton.addEventListener("click", () => {
    extraction(numbersValues)
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i].innerHTML == extractedNumber.innerHTML) {
            numbers[i].classList.replace("bg-white", "bg-danger");
            numbers[i].classList.replace("box_shadow", "box_shadow_coral");
            console.log(numbersGone)
        }
    }
})