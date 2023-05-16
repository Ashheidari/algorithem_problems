//HashMap
//use hashmap, x+y = z => x = z-y

const twoSum = (nums,target)=>{
    const hashMap = new Map()
    for (let i = 0; i<= nums.length; i++){
        let complement = target - nums[i];
        
        if(hashMap.has(complement)){
            return [hashMap.get(complement) , i];
        };
        
        hashMap.set(nums[i], i);
    }
}


const twoSumB = (nums,target)=>{
    const hashMap = {};
    for (let i= 0; i<=nums.length; i++){

        if(hashMap[nums[i]]>=0){
            return [hashMap[nums[i]], i];
        }

        hashMap[target-nums[i]] = i
        console.log(hashMap);
    }


}



console.log(twoSum([2,7,11,15],9));
console.log(twoSumB([2,7,11,15],9));



// Examples [2,7,11,15] , 9 ===> [0,1]
