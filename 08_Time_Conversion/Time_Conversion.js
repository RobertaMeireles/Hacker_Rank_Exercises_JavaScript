/*Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

S='12:01:00PM'
Return '12:01:00'.

S='12:01:00AM'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string 
representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24  hour format
Input Format

A single string  that represents a time in 12 hour clock format.

Constraints

All input times are valid

Sample Input 0
07:05:45PM

Sample Output 0
19:05:45 */

const time = '11:01:00AM'

const timeConversion = (s) => {
    let result
    let num = parseInt(`${s.charAt(0)}${s.charAt(1)}`)
    let type =`${s.charAt(8)}${s.charAt(9)}`.toUpperCase()

    if( (type == 'PM') && (num == 12)) {
        num = num
    }

    else if( (type != 'PM') && (num != 12)) {
        if(num < 10){
            num = `0${num}`
        }else{
            num = `${num}`
        }
    }

    else if( (type == 'PM') && (num != 12)) {
        num = num + 12
    }

    else{
        num = `00`
    }

    result = `${num}:${s.charAt(3)}${s.charAt(4)}:${s.charAt(6)}${s.charAt(7)}`


    return result
}


console.log(timeConversion(time))
