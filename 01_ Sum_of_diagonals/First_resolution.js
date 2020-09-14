// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

array = [[11,2,4],[4,5,6],[10,8,-12]] //matriz 3 por 3


function diagonalDifference(arr) {
    const quantity = arr.length 
    let max = arr.length-1 
    let d = []; 
    let e = []; 
    let total;
    //right
    for(let i = 0; i < quantity; i++){
        for(let j = 0; j < quantity; j++){
            if(i === j){
                d.push(arr[i][j])
            }
        }
    }
    const dReduce = d.reduce((acumulador, valorAtual)=>acumulador + valorAtual)

    //left
    for(let a = 0; a < quantity; a++){
        for(let b = 0; b < quantity; b++){
            if(max === b){
                e.push(arr[a][b])
            }
        }
        max -= 1;
    }
    const eReduce = e.reduce((acumulador,valorAtual)=>acumulador + valorAtual)

    if(dReduce>=eReduce){
        total = (dReduce - eReduce)
    }else{
        total = (eReduce - dReduce)
    }
    return total
}

const result = diagonalDifference(array);
console.log(result);