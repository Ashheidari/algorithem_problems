const maxArea = function(height) {
    let max = 0
    let l = 0;
    let r = height.length - 1
    while (l < r){
        const area = (r-l) * Math.min(height[l], height[r]);
        if (height[r] > height[l]){
            l++
        }else{
            r--
        }
        max = Math.max(max,area);
    }
    return max;

};


console.log(maxArea([1,8,6,2,5,4,8,3,7]));