// link the buttons that i need from css 
let extractionButton = document.querySelector('#extract');
let endGameButton = document.querySelector('#endGame');
// link number to refresh after each extraction
let extractedNumber = document.querySelector('#number');


// create function to refresh number each time 
function refreshExtraction() {
    extractedNumber.innerHTML = '20';
}

// on extraction button click refresh value trough the function created
extractionButton.addEventListener('click', () => {
    refreshExtraction();
});
