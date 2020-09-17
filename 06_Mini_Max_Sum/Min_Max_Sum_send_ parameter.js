const info = [1,3,5,7,9,1]


const sortNumbers = (a, b) =>{
    return a - b;
}


const miniMaxSum = (arr,num) => {
    let sortNumersMinimum = [...arr]
    let sortNumersMaximum = [...arr]
    let arrayMin
    let arrayMax
    let totalMin
    let totalMax

    sortNumersMaximum.sort(sortNumbers)
    sortNumersMinimum.sort(sortNumbers)

    arrayMin = sortNumersMinimum.splice(0,(sortNumersMinimum.length)-num)
    arrayMax = sortNumersMaximum.splice(num,sortNumersMaximum.length)

    totalMin = arrayMin.reduce((a,b) => a +b)
    totalMax = arrayMax.reduce((a,b) => a +b)

    return console.log(totalMin,totalMax)
}


miniMaxSum(info, 2)