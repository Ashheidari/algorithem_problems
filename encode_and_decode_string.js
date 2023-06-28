class EncodeDecode {
    
    

     encode(strs){
        let str = ""
        for ( let string of strs){

            str += string.length.toString() + "#" + string
        }
        return str
    }

    decode(str){
        let i = 0
        const res = []
        while (i < str.length){
            let j = i;
            while (str[j] != "#"){
                j++
            }
            let length = Number(str.slice(i,j));
            let word = str.slice(j+1,j+1+length);
            res.push(word);
            i = j + 1 + length
        }
        return res
    }

}

const encodeDecode = new EncodeDecode()
const str = encodeDecode.encode(["leet","co#de"]);
console.log(encodeDecode.decode(str))

/* 
                ["leet", "co#de"]
                str = 4#leet5#co#de
                      i     j   


encode is going to change our array to a string => "(number of char each array element) + # + element"



Input: ["lint","code","love","you"]
Output: ["lint","code","love","you"]
Explanation:
One possible encode method is: "lint:;code:;love:;you"

*/