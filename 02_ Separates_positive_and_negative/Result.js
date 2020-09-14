/*Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places 
after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six 
decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . 
Results are printed as:

0.400000
0.400000
0.200000 */

const array = [-4, 3, -9, 0, 4, 1];

// size
function size(arr){
    const size = arr.length;
    return size;
    
}

// division
function division(value1, value2){
    const result = (value1 / value2 )
    return result
}

function plusMinus(arr) {
    const arraySize = size(arr);
    let sizePositive;
    let sizeNegative;
    let sizeZero;
    let arrayPositive = [];
    let arrayNegative = [];
    let arrayZero = [];
    let totalPositive;
    let totalNegative;
    let totalZero;
    
    arr.forEach(function(value,indice){

        //console.log(`${indice + 1} ${value}`)
        //console.log(value)
        //zero
        if(value === 0){ 
            arrayZero.push(arr[indice]);
            sizeZero = size(arrayZero);
            totalZero = (sizeZero / arraySize).toFixed(6);
        
        //negative
        }if(value < 0){ 
            arrayNegative.push(arr[indice]);
            sizeNegative = size(arrayNegative);
            totalNegative = (sizeNegative / arraySize).toFixed(6);

        //positive
        }if(value > 0 ){ 
            arrayPositive.push(arr[indice]);
            sizePositive = size(arrayPositive)
            totalPositive = (sizePositive /arraySize).toFixed(6);
        }
        
    });

    return console.log(`${totalPositive} \n\ ${totalNegative} \n\ ${totalZero}`)
        

}

plusMinus(array);


