// Array - use pointer like quickSort

const merge = function(nums1, m, nums2, n) {

    let i = m - 1
    let j = n - 1
    let k = m + n -1
    while (j>=0 && i>=0){
        if(nums2[j] > nums1[i]){
            nums1[k] = nums2[j]
            j -- ;
            k -- ;
        }else{
            nums1[k] = nums1[i]
            i -- ;
            k -- ;
        }
    }
    while (j>=0){
        nums1[k] = nums2[j]
        j --;
        k --;
    }
    return nums1

}



console.log(merge([0], 0, [1],1));
console.log(merge([2,0], 1, [1],1));
console.log(merge([1,2,3,0,0,0], 3, [2,5,6],3));
console.log(merge([1,2,3,0,0,0], 3, [1,1,2],3));