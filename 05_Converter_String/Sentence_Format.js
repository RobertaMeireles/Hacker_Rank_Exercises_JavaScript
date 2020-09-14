/* 
Convert 1 letter to uppercase letter
Convert to lowercase the letter after the space
Convert to uppercase the letter after of (.?!)
Remove more than one space between words 
*/

let value = ' roberta                Meireles.silva '

function sentenceFormat(phrase){
    let newPhrase
    let currentI = []

    phrase = phrase.trim()
    phrase = phrase.replace(/\s{2,}/g, ' ')

    for(i=0; i < phrase.length; i++){
        //console.log('step: '+i)
        if(!currentI.includes(i)){
            
            if( i === 0 ){
                newPhrase = phrase.charAt(0).toUpperCase()

            }else if(phrase.charAt(i) === ' '){ 
                newPhrase += `${phrase.charAt(i)}${phrase.charAt(i+1).toLowerCase()}`
                currentI.push(i+1)

            }else if((phrase.charAt(i) === '.' && phrase.charAt(i+1) === ' ') ||
                    (phrase.charAt(i) === '?' && phrase.charAt(i+1) === ' ') ||
                    (phrase.charAt(i) === '!' && phrase.charAt(i+1) === ' ')) {
                        newPhrase += `${phrase.charAt(i)}${phrase.charAt(i+2).toUpperCase()}`
                        currentI.push(i+1)
                        currentI.push(i+2)

            }else if((phrase.charAt(i) === '.') || 
                    (phrase.charAt(i) === '?') ||
                    (phrase.charAt(i) === '!')){
                        newPhrase += `${phrase.charAt(i)} ${phrase.charAt(i+1).toUpperCase()}`
                        currentI.push(i+1)
            }else{
                newPhrase += phrase.charAt(i)
            }
            //console.log(newPhrase)
        }
    }
    return newPhrase
}

console.log(sentenceFormat(value))