// 60%
// https://app.codility.com/demo/results/trainingFDPVRX-4M2/

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let start = A+A%K;
    let end = B-B%K;

    let result = (end - start)/K+1

    //console.log(result)
    return result;
}
