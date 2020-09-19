/*You are choreographing a circus show with various animals. For one act, you are given 
two kangaroos on a number line ready to jump in the 
positive direction (i.e, toward positive infinity).

The first kangaroo starts at location  and moves at a rate of  meters per jump.
The second kangaroo starts at location  and moves at a rate of  meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time 
as part of the show. If it is possible, return YES, otherwise return NO. */

const kangarooX1 = 0 // Position Kangaroo 1 started
const kangarooV1 = 2 // jump Kangaroo 1
const kangarooX2 = 5 // Position Kangaroo 2 started
const kangarooV2 = 3 // jump Kangaroo 2

function jump (backwardKangarooPosition,aheadKangarooPosition,backwardKangarooJumpDistance,aheadKangarooJumpDistance) {
    
    while(backwardKangarooPosition < aheadKangarooPosition) {
        backwardKangarooPosition = backwardKangarooPosition + backwardKangarooJumpDistance
        aheadKangarooPosition = aheadKangarooPosition + aheadKangarooJumpDistance

        if(backwardKangarooPosition == aheadKangarooPosition) {
            return 'YES'
        }
    }
    return 'NO'
}


function kangaroo(kangaroo1position, kangaroo2position, kangaroo1jump, kangaroo2jump) {

    if(kangaroo1position == kangaroo2position && kangaroo1jump != kangaroo2jump){
        return 'NO'
    }else if(kangaroo1position == kangaroo2position && kangaroo1jump == kangaroo2jump){
        return 'YES'
    }else if(kangaroo1position < kangaroo2position && kangaroo1jump > kangaroo2jump) {
        return jump(kangaroo1position,kangaroo2position,kangaroo1jump,kangaroo2jump)
    }
    else if(kangaroo2position < kangaroo1position && kangaroo2jump > kangaroo1jump) {
        return jump(kangaroo2position,kangaroo1position,kangaroo2jump,kangaroo1jump)
    }else {
        return 'NO'
    }
}

console.log(kangaroo(kangarooX1,kangarooV1,kangarooX2,kangarooV2))