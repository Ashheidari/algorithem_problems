var addBinary = function(a, b) {
    const c = b.length > a.length ? b.length - a.length : a.length - b.length
    if (a.length > b.length){
        for (i=0; i< c; i++){
            b = '0' + b
        }
    }else if (a.length < b.length){
        for (i=0; i< c; i++){
            a = '0' + a
            console.log(a)
        }
    }
    console.log(a,b)
    const res = []
    let carry = false
    for (let i = b.length-1; i>=0; i--){
        if (!carry){

            if (b[i]==='1' && a[i]==='1'){
                carry = true;
                res.unshift('0')
            }else {
                res.unshift(b[i] == '1' || a[i] == '1' ? '1' : '0')
            }
        }else {
            if (b[i]==='1' && a[i]==='1'){
                res.unshift('1')
            }else if (b[i]=='0' && a[i] =='0') {
                res.unshift('1');
                carry = false

            }else{
                res.unshift('0')
                carry = true
            }
        }

    }
    if (carry){
        res.unshift('1')
    }
    return res.join('')
};

console.log(addBinary("1","111"));

/* 
11
01
 0
----
111
001
*/