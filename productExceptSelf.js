const productExceptSelf =(nums)=>{

let j = 0;
let i = 0; 
let count = 0
const result = new Array(nums.length).fill(1)
while ( j < nums.length ){
    console.log(count)
    if (j === i ){

        i++
    }else if(i===nums.length){
        i = 0;
        j++
    }else{
        result[j]*=nums[i]
        i++
    }

}
return result

}


const productExceptSelf2 = (nums)=>{

let prefix = 1;
let postfix = 1;
const result = []
for (let i = 0; i<nums.length; i++){
    result[i] = prefix;
    prefix *= nums[i]
}

for (let i = nums.length -1; i>0; i--){
    postfix *= nums[i];
    result[i-1] *= postfix
}
return result

}




console.log(productExceptSelf2([1,2,3,4]));






/* 


 prefix = [1,n[0],x[1]*n[1],x[2]n[2],x[3]n[3]]
 postfix = [x[0]n[0],....,x[n-1]n[n-1],n[n],1]

Example 1:
                     i
Input: nums = [1,2,3,4]
             j
Output: [24,12,8,6]


Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.





*/