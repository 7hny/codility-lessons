// 100%
// https://app.codility.com/demo/results/training6KRS73-4J7/

function solution(A) {
    let arr = A;
    A.sort((a, b) => (a - b));

    let result1 = arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1];
    let result2 = arr[0] * arr[1] * arr [arr.length-1];
    return Math.max(result1, result2);
}

// [-5, 5, -5, 4] 125
//  [-5, -6, -4, -7, -10] -120
