//Array, if, return 

const plusOneA = function(digits) {
  
    for(let i=digits.length-1; i>=0; i--){
        if(digits[i]!==9){
            digits[i]++;
            return digits;
        }
        digits[i]=0;
        if (i === 0) {
            digits.unshift(1);
            return digits;
        }
    }


};
const plusOneB = function (digits) {
    for  (let i = digits.length - 1; i >= 0; i--) {
        if  (digits[i] !== 9) {
            digits[i]++;
            return digits;
        }
        else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};

const plusOneC = function (digits) {
    for  (let i = digits.length - 1; i >= 0; i--) {
        if  (digits[i] !== 9) {
            digits[i]++;
            break
        }else if(i ==0){
            digits.unshift(1);
            break

        }
        else {
            digits[i] = 0;

        }
    }

    return digits;
};




console.log(plusOneB([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
console.log(plusOneA([5,9,9]))
console.log(plusOneA([9]))
console.log(plusOneC([9,9,9]))
console.log(plusOneC([9,8,9]))


