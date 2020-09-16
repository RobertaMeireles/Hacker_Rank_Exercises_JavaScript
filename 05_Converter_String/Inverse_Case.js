const value = 'RoBeRtA    Me'

// TERNARY OPERATOR
const inverseCase = (phrase) => {
    let phraseNew = ''
    phrase = phrase.trim()

    for(i=0; i < phrase.length; i++){
        newChar = phrase.charAt(i) == phrase.charAt(i).toUpperCase() ? phrase.charAt(i).toLowerCase(): phrase.charAt(i).toUpperCase()
        
        phraseNew += newChar
    }
    return phraseNew
}

// WITHOUT TERNARY OPERATOR
// const inverseCase = (phrase) => {
//     let phraseNew = ''
//     phrase = phrase.trim()
//     let newChar

//     for(let i=0; i <= phrase.length; i++){
//         //console.log('passo'+i)
//         if(phrase.charAt(i) == phrase.charAt(i).toUpperCase()) {
//             newChar = phrase.charAt(i).toLowerCase()
        
//         } else {
//             newChar = phrase.charAt(i).toUpperCase()
//         }
//         phraseNew += newChar
//     }
//     return phraseNew

// }

console.log(inverseCase(value))
