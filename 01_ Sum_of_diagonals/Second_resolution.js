// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

array = [[11,2,4],[4,5,6],[10,8,-12]] //matriz 3 por 3


function diagonalDifference(arr) {
    const quantity = arr.length
    let max = arr.length-1 
    let d = []; 
    let e = []; 
    let total;
    for(let i = 0; i < quantity; i++){
        for(let j = 0; j < quantity; j++){
            //if para diagonal (esquerda para direita) - o valor que deseja colocar no array sempre será o indice i e j igual, por isso pode assim, pois é uma matriz absoluta (coluna e linha mesma quantidade)
            if(i === j){
                d.push(arr[i][j])
            //if para diagonal (direita para esquerda) - não será o mesmo indice, por isso preciso fazer o calculo do ultimo indice
            }if(max === j){
                e.push(arr[i][j])
            }
        }
        max -= 1
    }
    const dReduce = d.reduce((acumulador, valorAtual)=>acumulador + valorAtual)
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