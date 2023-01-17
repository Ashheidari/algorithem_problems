const findLongCommonPrefix = (strs)=>{

    let result = "";

    for (let i =0; i<strs[0].length; i++){
        for (const s of strs){
            if (strs[0][i] != s[i]){
                return result;
            }
        }
        result += strs[0][i];
    }


    return result;

}



const array = ['flower','flow','flight'];
const array2 = ['ab','a'];

console.log(findLongCommonPrefix(array));
console.log(findLongCommonPrefix(array2));

console.log(array2[1][1]);
console.log('b' != undefined);