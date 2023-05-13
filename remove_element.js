

const removeElement = (nums,num)=>{
    let i = 0;
    let j= 0;
    let count = 0;
    while(i<nums.length){
        if (nums[i]!==num){
            if (i!==j){
                [nums[i],nums[j]] = [nums[j],nums[i]];
            }
            i++
            j++

        }else{
            nums[i]= undefined
            i++
            count ++
        }
    }
    const k = nums.length - count
    return {k,nums}
}

console.log(removeElement([3,2,2,3], 3));



/*
                    


Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
                 ji
                [3,2,2,3]    val = 3
                
                 j i
                [3,2,2,3]

                    j i
                [2,3,2,3]

                     j i
                [2,2,3,3]
----------------------------


                  j   i           
             [0,1,2,-,3,0,4,2]   traget = 2

                    j   i
             [0,1,3,-,2,0,4,2]   target = 2

                      j   i     
             [0,1,3,0,2,2,4,2]  target = 2

                        j     i
             [0,1,3,0,4,2,2,2]

Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are undersfcores). */