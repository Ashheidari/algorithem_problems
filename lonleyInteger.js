function lonelyinteger(a) {
    const hashMap = new Map();
    for (let el of a){
        let prev = hashMap.get(el) || 0
        hashMap.set(el, ++prev);
    }
    console.log(hashMap)

    for (let [key, value]  of hashMap){
        if (value === 1){
            return key;
        }
    }

}


console.log(lonelyinteger([1,2,3,4,3,2,1]))