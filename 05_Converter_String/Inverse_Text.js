const value = 'Roberta   Meireles'

// const inverseText = (phrase) => {
//     let newPhrase = ''
//     for(let i= phrase.length-1;   i >= 0;   i--) {
//         newPhrase += phrase[i]
//     }
//     return newPhrase
// }


//JS Functions:
const inverseText = (phrase) => phrase.split('').reverse().join('')


console.log(inverseText(value))



