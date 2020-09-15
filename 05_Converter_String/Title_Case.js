/*
Converts the first letter of each word to uppercase 
Don't remove the spaces between the letters
Remeve the spaces from the beginning and end of the string
*/

const value = '   roberta     meireles        da silva s'

const titleCase = (value) => {
    let newPhrase 
    value = value.trim()
    item = []
    let cont = 0
    for(let i= 0; i < value.length; i++) {
        //console.log('passo'+i)
        if(!item.includes(i)) {
            if( i === 0){
                newPhrase = value.charAt(i).toUpperCase() 

              }else if (value.charAt(i) === ' ' && value.charAt(i+1) === ' ' ){
                while(value.charAt(i+cont) === ' ') {
                    newPhrase += ' '
                    item.push(i+cont-1)
                    cont++
                }
                cont = 0

              }else if( value.charAt(i) === ' ') {
                  newPhrase += value.charAt(i)
                  newPhrase += value.charAt(i+1).toUpperCase()
                  item.push(i+1)

              }else{
                  newPhrase += value.charAt(i)
            }
            //console.log(newPhase)
        }
    }
    return newPhrase
}

console.log(titleCase(value))
