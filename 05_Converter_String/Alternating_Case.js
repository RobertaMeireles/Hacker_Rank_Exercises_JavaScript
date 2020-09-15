const value = '   roberta     meireles        da silva s'

const alternatingCase = (phrase) => {
    let newPhrase
    let lastCharLowerCase = true
    phrase = phrase.trim()

    for(i=0; i < phrase.length; i++){
        if( i === 0) {
            newPhrase = phrase.charAt(0).toLowerCase()

        }else if(phrase.charAt(i) === ' '){
            newPhrase += ' '

        }else if(lastCharLowerCase) {
            newPhrase += phrase.charAt(i).toUpperCase()
            lastCharLowerCase = false
        }else {
            newPhrase += phrase.charAt(i).toLowerCase()
            lastCharLowerCase = true
        }
    }

    return newPhrase
}

console.log(alternatingCase(value))