const validPalindrome = (s)=>{

    const newS = s.toLowerCase().replace(/[^0-9a-z]/gi, '');

    let i = 0
    let j = newS.length - 1

    while(i <= j){
        if (newS[i] !== newS [j]){
            return false
        }
        i++
        j--
    }

    return true

    
}

console.log(validPalindrome(" "))

/* 


Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.




*/