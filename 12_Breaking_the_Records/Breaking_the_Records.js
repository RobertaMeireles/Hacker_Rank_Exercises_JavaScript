/*Maria plays college basketball and wants to go pro. Each season she 
maintains a record of her play. She tabulates the number of times she breaks 
her season record for most points and least points in a game. Points scored 
in the first game establish her record for the season, 
and she begins counting from there. */

const scores = [3,4,21,36,10,28,35,5,24,42]

function breakingRecords(scores) {
    let mostPoints 
    let leastPoints
    let mostTotal = 0
    let leastTotal = 0
    mostPoints = scores[0]
    leastPoints = scores[0]
    scores.forEach(e => {
        if(e < leastPoints ) {
            leastPoints = e
            leastTotal++

        }else if(e > mostPoints ) {
            mostPoints = e
            mostTotal++

        }
    });
    let result = []
    result.push(mostTotal,leastTotal)
    return result
}

console.log(breakingRecords(scores))