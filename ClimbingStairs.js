//dynamic programming - memoization / fibonaci
const climbStairs = (n)=>{
    const memo = new Array(n+1);
    memo[0] = 0
    memo[1] = 1
    memo[2] = 2
    for(let i = 3; i<=n+1; i++){
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[n];
}



console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(10));