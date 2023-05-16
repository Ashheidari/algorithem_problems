const indexOfFirstOccurrence = (haystack,needle) =>{
    let i = 0; //index
    let j = 0; //pointer to needle string char
    while( i < haystack.length){
        if (haystack[i] === needle[j]){
            if (j === needle.length -1){
                return i - j
            }

            j++


        }else {
            i = i-j;            
            j = 0;
        }
        i++
    }
    return -1 




}



const indexOfFirstOccurrence2 = (haystack,needle) =>{
    const n = haystack.length
    const m = needle.length

    for (let i = 0; i< n-m; i++){
        let isValid = true
        for(let j = 0; j<m; j++){

            if (haystack[i+j]!== needle[j]){
                isValid = false
                break;
            }
        }
        if (isValid){
            return i
        }

    }
    return -1


}





console.log(indexOfFirstOccurrence("sadbbutsad","but"));
console.log(indexOfFirstOccurrence2("mississippi","issip"));










/* 
                 i    
            "mississippi"

                    j
                issip

                 i
            sadbbbutsad
            
              j
            bbut
            
               i
            hello
             j
            ll



Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.


*/