/*HackerLand University has the following grading policy:

Every student receives a grade in the inclusive range 0 from 100 to .
Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:

- If the difference between the grade and the next multiple of 5 is less than 3, 
round  up to the next multiple of .

- If the value of grade is less than 38, no rounding occurs as the result will still be 
a failing grade. */

const info = [73,67,38,33,100]


function gradingStudents(grades) {
    let newInfo = []
    let nextMultiple
    let numSub
    grades.forEach(e => {
        if(e === 100){
            newInfo.push(e)
        } else if(e < 38) {
            newInfo.push(e)
        } else {
            nextMultiple = Math.ceil(e/5)*5
            console.log(nextMultiple)
            numSub = nextMultiple - e
            if(numSub<3){
                newInfo.push(nextMultiple)
            }else{
                newInfo.push(e)
            }
        }
    });
    return newInfo
}

console.log(gradingStudents(info))