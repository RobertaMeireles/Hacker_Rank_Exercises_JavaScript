/*Lily has a chocolate bar that she wants to share it with Ron for his birthday. 
Each of the squares has an integer on it. She decides to share a contiguous segment 
of the bar selected such that the length of the segment matches Ron's birth month 
and the sum of the integers on the squares is equal to his birth day. You must 
determine how many ways she can 
divide the chocolate. */

const chocolate = [1, 2, 1, 3, 2]
const month = 2
const day = 3


function birthday(s, d, m) {
    let acum = 0
    let result = 0
    for(let i=0; i<=s.length-m; i++){
        for(let j=i; j <= i+m-1; j++){
            acum = acum + s[j]
        }
        console.log('acum: ' + acum)
        if(acum == d){
            result = result + 1
            console.log('entrei aqui'+result)
        }
        acum = 0
    }

    acum = 0
    return result
}

console.log(birthday(chocolate,day,month))