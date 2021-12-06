// 100%
// https://app.codility.com/demo/results/trainingH4B2PC-GA9/

function solution(A, B, K) {
    let offset = (A%K==0)? 1 : 0;

    // console.log(Math.floor(A/K))
    // console.log(Math.floor(B/K))

    return Math.floor(B/K) - Math.floor(A/K) + offset
}
