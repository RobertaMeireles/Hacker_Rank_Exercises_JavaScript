/*Sam's house has an apple tree and an orange tree that yield an abundance of fruit. 
In the diagram below, the red region denotes his house, where s is the start point, 
and t is the endpoint. The apple tree is to the left of his house, and the orange 
ree is to its right. You can assume the trees are located on a single point, where 
the apple tree is at point a, and the orange tree is at point b. 
When a fruit falls from its tree, it lands d units of distance from its tree of 
origin along the x-axis. A negative value of d means the fruit fell d units to the 
tree's left, and a positive value of  means it falls  units to the tree's right.

Given the value of d for m apples and  oranges, determine how many apples and oranges 
will fall on Sam's house (i.e., in the inclusive range [s,t])?

s start Sam's house
t end Sam's house

a apple tree
b orange tree

apples Apples are thrown
oranges Apples are thrown

*/


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let resultApple = 0
    let resultOrange = 0
    apples.forEach(e => {
        let valueApple = e + a
        if((valueApple>=s) && (valueApple<=t) ){
            resultApple ++
        }
    });

    oranges.forEach(e => {
        let valueOrange = e + b
        if((valueOrange>=s) && (valueOrange<=t)){
            resultOrange++
        }
    });

    console.log(resultApple)
    console.log(resultOrange)
}


countApplesAndOranges(7,11,5,15,[-2, 2, 1],[5,-6])