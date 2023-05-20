

const containsDuplicate = (nums)=>{

    const hashMap = new Map();

    for (let i = 0; i<nums.length; i++){
        if (hashMap.has(nums[i])){
            return true
        }
        hashMap.set(nums[i],i);
    }

    return false
}



console.log(containsDuplicate([1,2,3,1]))



/* 

{1:0,2:1}

                 i    
Input: nums = [1,2,3,1]
Output: true


Example 2:
Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true





*/