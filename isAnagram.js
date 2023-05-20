const isAnagram = (s,t)=>{

if (s.length !== t.length) return false


const hashMap = {}

for (let [char,i] of s){
    
    if (hashMap[char]){
        hashMap[char] += 1
    }else{

        hashMap[char] = 1 
    }
}

for (let [char,i] of t){
    if(hashMap[char]>0){
        hashMap[char] -=1
    }else{
        return false
    }
}
return true


}


console.log(isAnagram("aacc","ccac"));
                              
console.log(isAnagram("anagram","nagaram"));
console.log(isAnagram("rat","car"));

/* 

Example 1:
            i                 j
                           
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
             i          j
Input: s = "rat", t = "car"
Output: false

 i          j
"aacc"   "ccac"




*/