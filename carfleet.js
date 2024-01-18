const carFleet = function(target, position, speed) {

    let map = new Map()
    const stack = []
    for (let i = 0; i<position.length; i++){
        map.set(position[i],speed[i]);
    }
    map = new Map([...map.entries()].sort((a,b) => b[0]-a[0]))

    for (let [p,s] of map){
        if (stack.length === 0){
            stack.push([p,s])
            continue
        }
    
        const [firstP, firstS] = stack[stack.length -1]
        const arivingtimefirstcar = (target  - firstP) / firstS
        const arivingtimesecondcar = (target - p) / s
        if (arivingtimesecondcar > arivingtimefirstcar){
                stack.push([p,s])
        }
    }
    console.log(stack)
    return stack.length
    

};


/* 
Input: target = 12 mile, position = [10,8,0,5,3], speed = [2,4,1,1,3]

map = {10:2,8:4,0:1,5:1,3:3}

map = {10:2,8:4,5:1,3:3,0:1}

 */