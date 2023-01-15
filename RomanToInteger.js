


const romanToInteger =(s)=>{
    const dict = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    const integers = s.split('').map((romanChar)=>(dict[romanChar]));
    console.log(integers);
    const result = integers.reduce((total,x,i)=>(x < integers[i+1] ? total - x : total + x),0);
    return result;
}


console.log(romanToInteger('IV'));


