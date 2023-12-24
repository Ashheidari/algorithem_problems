const evalRPN = function(tokens) {
    
    const stack = [];

    for (let token of tokens){
        if (token === "*"){
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1*num2);
        }else if (token === "/"){
            let num2 = stack.pop()
            let num1 = stack.pop()

            stack.push(Math.trunc(num1/num2));
        }else if (token ==='+'){
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1+num2);
        }else if (token ==='-'){
            let num2 = stack.pop()
            let num1 = stack.pop()
            stack.push(num1-num2);
        }else{
            stack.push(Number(token));
        }
        //console.log(stack)
    }
    return stack[0]


};


/* 
[4,]

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6



["10","6","9","3","+","-11","*","/","*","17","+","5","+"]

 */