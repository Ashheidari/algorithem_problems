// Using Set data structure
const longest_consecutive = (nums)=>{

    const set = new Set(nums);
    let maxLength = 0
    for (let num of set){
        let prevNums = num - 1;
        if (set.has(prevNums)) continue
        let currNum = num;
        let longest = 1;
        while (set.has(currNum + 1)){
            longest ++
            currNum ++
        }
        maxLength = Math.max(longest,maxLength)
    }
    return maxLength

}

console.log(longest_consecutive([100,4,200,1,3,2]))
console.log(longest_consecutive([0,3,7,2,5,8,4,6,0,1]))



/* 

Example 1:                              
                                      
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.





Example 2:                 
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9



*/