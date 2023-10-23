var threeSum = function(nums) {
    
    nums.sort((a,b)=> a-b);
    const res = []
    for (let i =0; i<nums.length; i++){
        if (nums[i]>0) break;
        if (i > 0 && nums[i] === nums[i-1]) continue;

        let l = i +1;
        let r = nums.length-1
        while (l<r){
            const threesum = nums[i] + nums[l] + nums[r];
            if (threesum > 0){
                r--
            } else if (threesum < 0){
                l++
            }else{
                res.push([nums[i],nums[l],nums[r]]);
                l++;
                r--
                while(nums[l] === nums[l-1] && l < r){
                    l++
                }
            }
        }
    }
    return res



};


threeSum([-1,0,1,2,-1,-4]);



/* 
                i l         r  
Input: nums = [-1,0,1,2,-1,-4]
                  i  l        r
                [-4,-1,-1,0,1,2]
Output: [[-1,-1,2],[-1,0,1]]




 */