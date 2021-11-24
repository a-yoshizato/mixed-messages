// Mixed Messages App - Nov 23, 2021
// This app creates random messages and it is part of my Full-stack engineer learning path at Codecademy.

// Creating arrays with the elements of the phrase to be generated
const strArray1 = ['Your day is going to be', 'Your future seems to be', 'The life looks', 'Your energy seems'];
const strArray2 = ['amazing', 'wonderful', 'brilliant', 'great', 'fantastic'];
const strArray3 = ['promissing', 'fortunate', 'full of surprises', 'full of friends'];
const strArray4 = ['Smiling', 'Laughing', 'Socilalizing', 'Making connections', 'Playing', 'Engaging in causes you believe' ];
const strArray5 = ['will make you', 'will turn your day', 'will make your life even' ];
const strArray6 = ['happier', 'shiner', 'brighter', 'warmer', 'stronger'];


// Function that generates random phrases based on the content of the declared arrays
let newPhrase = (strInput1, strInput2, strInput3, strInput4, strInput5, strInput6) => {
    const strTemp1 = strInput1[Math.floor(Math.random() * (strInput1.length))];
    const strTemp2 = strInput2[Math.floor(Math.random() * (strInput2.length))];
    const strTemp3 = strInput3[Math.floor(Math.random() * (strInput3.length))];
    const strTemp4 = strInput4[Math.floor(Math.random() * (strInput4.length))];
    const strTemp5 = strInput5[Math.floor(Math.random() * (strInput5.length))];
    const strTemp6 = strInput6[Math.floor(Math.random() * (strInput6.length))];
   
    let phraseTemp = `${strTemp1} ${strTemp2} and ${strTemp3}! ${strTemp4} ${strTemp5} ${strTemp6}!`;

    return phraseTemp
}


// Function that creates N phrases according to the quantity requested by the user
let phrasesArray = [];
let phrasesGenerator = (quantity) => {
    for (i=0; i<quantity; i++) {
        phrasesArray.push(newPhrase(strArray1, strArray2, strArray3, strArray4, strArray5, strArray6));
}
    return phrasesArray
    }


// Calling the function with the number of phrases to be generated    
console.log(phrasesGenerator(20));
