// 22%
// https://app.codility.com/demo/results/trainingHJFE23-NT2/

function solution(A) {
    let arr = A;
    arr.sort();

    let result = arr[arr.length-3] * arr[arr.length-2] * arr[arr.length-1];
    return result;
}

// [-5, 5, -5, 4] 125

