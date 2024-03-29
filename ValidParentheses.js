//HashMap-STACK
//use hashmap for open colse parenthese and STACK for LIFO pattern that exist in string

const isValid =(str)=>{

   const hashMap= {'(':')', '[':']', '{':'}' }
   const stack = []
    for (s of str){
        if (s === '('|| s === '['|| s==='{'){
            stack.push(s);
        }
        else if (hashMap[stack.pop()] !== s ){
            return false
        }
    }
    return stack.length === 0
}



console.log(isValid('()'));
console.log(isValid('({[]})'));
console.log(isValid('()[]{}'));
console.log(isValid('({}])'));
