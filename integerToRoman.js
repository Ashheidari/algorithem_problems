var intToRoman = function(num) {
    const ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"]
    const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
    const hrns = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]
    const ths = ["","M","MM","MMM"]
    
    
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];

};








/*





   hashMap = {"1":"I","2":"II","3":"III","4":"IV","5":"V","10":"X","50":"L","100":"C","500":"D","1000":"M"} 

    numDigits = nums.toString().length

    switch numDigits{
        case 1:
            if (1<=n<5){
                return hashmap[n]
            }
            if (n>5){
                
            }

        case 2:
        
        
        case 3:

        case 4:

    }

    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000


    num = 162     
    output = CLXII

                    
Input: num = 3
Output: "III"
Explanation: 3 is represented as 3 ones.
Example 2:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 3:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 





*/
