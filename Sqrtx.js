//binary search approach

const mySqrt = function(x) {
    let low = 1;
    let high = x;
    let ans = 0;
    while(low<=high){
        let mid = Math.floor((high+low)/2);
        if(x/mid === mid){return mid}
        else if (x/mid < mid){
            high = mid - 1
        }
        else{
            low = mid + 1
            ans = mid
        }

    }
    return ans
};


console.log(mySqrt(145));