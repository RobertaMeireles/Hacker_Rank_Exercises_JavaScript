function tree (n) {
    let cont
    let cont1
    let a = ''
    let e = '';
    for (let i = 0; i < n; i++){
        cont = n - i // 6 - 0 = 6
        cont1 = n - cont + 1  // 6 - 6 = 0 
        for(let j = 1; j < cont; j++){
            e += '-'
        }
        for(let x = 1; x <= cont1; x++){
            a += '#'
        }
        if( i==0 ){
            console.log(e+'s2'+e)

        }
        console.log(e+a+a+e)
        e = ''
        a = ''
    }
} 

tree(7)
