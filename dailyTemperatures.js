const dailyTemperatures = function(temperatures) {
    let res = new Array(temperatures.length).fill(0)
    stack = []
    for (let i =0 ; i<temperatures.length; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length-1]]){
            let j = stack.pop()
            res[j] = i - j
        }
        stack.push(i)
    }
    return res
};



console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))