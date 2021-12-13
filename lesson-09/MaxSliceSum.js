// 53%
// https://app.codility.com/demo/results/training5GUSXS-K2G/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let sum = 0;
    let maxSlice = 0;

    // Kadane's algorithm:
    // when sum becomes negative
    // it's best to consider starting a new slice from current position
    for(let i=0; i<n; i++){
        sum = Math.max(0, (sum+A[i]));
        maxSlice = Math.max(maxSlice, sum);
    }

    return maxSlice;
}
