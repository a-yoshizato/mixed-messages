// Mixed Messages App - Nov 23, 2021
// This app creates random messages and it is part of my Full-stack engineer learning path at Codecademy.

// Creating arrays with the elements of the phrase to be generated
const subjectArray = ['A1', 'A2', 'A3'];
const verbArray = ['B1', 'B2', 'B3', 'B4'];
const adjectiveArray = ['C1', 'C2', 'C3', 'C4'];
const confirmationArray = [`D1`, `D2`, `D3`]

// Function that generates random phrases based on the content of the declared arrays
let newPhrase = (subjectInput, verbInput, adjectiveInput, confirmationInput) => {
    const subjectTemp = subjectInput[Math.floor(Math.random() * (subjectInput.length))];
    const verbTemp = verbInput[Math.floor(Math.random() * (verbInput.length))];
    const adjectiveTemp = adjectiveInput[Math.floor(Math.random() * (adjectiveInput.length))];
    const confirmationTemp = confirmationInput[Math.floor(Math.random() * (confirmationInput.length))];

    let phraseTemp = `${subjectTemp} ${verbTemp} ${adjectiveTemp} ${confirmationTemp}`;
    return phraseTemp
}

// Calling the function that generates a new phrase
console.log(newPhrase(subjectArray, verbArray, adjectiveArray, confirmationArray))