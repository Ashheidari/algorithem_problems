

const topKElements = (nums,k)=>{

    const hashMap = new Map();
    for (let num of nums){
        if (hashMap.has(num)){
            hashMap.set(num,hashMap.get(num) + 1)
        }else{
            hashMap.set(num,1);
        }
    }

    const freq = new Array(nums.length + 1).fill([]);
    for (let [key,value] of hashMap){
    
        freq[value] = [...freq[value],key]
    }
    const result = []
    for (let i = freq.length -1; i>0; i--){
        for (let n of freq[i]){
  
            result.push(n)
            if (result.length === k){
                return result;
            }
        }
    }

}


const topKElements2 = (nums,k)=>{
    const hashMap = new Map();
    for (let num of nums){
        if (hashMap.has(num)){
            hashMap.set(num,hashMap.get(num) + 1)
        }else{
            hashMap.set(num,1);
        }
    }

    const iterableMap = [...hashMap];
    const result = iterableMap.sort((a,b)=> b[1]-a[1]).map((value)=>value)
    

    console.log(hashMap)
    console.log(iterableMap);
    console.log(result);

}


console.log(topKElements2([1,1,1,2,2,2,3],2));


/* 




Example 1:



                               
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]




Example 2:
Input: nums = [1], k = 1
Output: [1]



*/