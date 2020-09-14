/*Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####

Its base and height are both equal to n It is drawn using # symbols and spaces. 
The last line is not preceded by any spaces.
Write a program that prints a staircase of size n

Function Description
Complete the staircase function in the editor below.

staircase has the following parameter(s): int n: an integer

Print
Print a staircase as described above.

Input Format
A single integer, n, denoting the size of the staircase.

Constraints

0 < n =< 100

Output Format
Print a staircase of size n using # symbols and spaces.

Note: The last line must have 0 spaces in it. */


function tree (n) {
    let cont
    let cont1
    let a = ''
    let e = '';
    for (let i = 0; i < n; i++){
        cont = n - i // 6 - 0 = 6
        cont1 = n - cont + 1  // 6 - 6 = 0 
        for(let j = 1; j < cont; j++){
            e += ' '
        }
        for(let x = 1; x <= cont1; x++){
            a += '#'
        }
        console.log(e+a)
        e = ''
        a = ''
    }
} 

tree(100)
