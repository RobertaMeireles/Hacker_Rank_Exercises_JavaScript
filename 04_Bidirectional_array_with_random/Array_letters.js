/* Bidirectional array with random letters */

function letters(row, col) {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let randomLetters
    let arraylettersRow = []
    let arrayletterTotal = []


    for( let i = 0; i < row; i++){

        for(let j = 0; j < col; j++){
            randomLetters = letters.charAt(Math.floor(Math.random() * letters.length));
            arraylettersRow.push(randomLetters)
        }
        arrayletterTotal.push(arraylettersRow)
        arraylettersRow = []
    }   
    return arrayletterTotal
}


console.log(letters(5,3))