
const groupAnagram = (strs)=>{
    const hashMap = new Map()
    for (word of strs){
        arrayCode = new Array(26).fill(0);
        for (char of word){
            const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
            arrayCode[charCode] +=1
        }
        const hashCode = arrayCode.toString();
        const values = hashMap.get(hashCode) || []
        values.push(word);
        hashMap.set(hashCode,values)
    }

    return [...hashMap.values()]





}





/* 


Example 1:

                
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]





*/