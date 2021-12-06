// 75%
// https://app.codility.com/demo/results/trainingRWXTU7-MRZ/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let start = A+A%K;
    let end = B-B%K;

    if(K>B) return 0;
    if(K==B) return 1;

    let result = (end - start)/K+1

    return Math.trunc(result);
}
