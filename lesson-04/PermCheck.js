// 66%
// https://app.codility.com/demo/results/training747T2F-VQA/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A;
    arr.sort((a,b)=> {
        return a-b
    })

    let step = arr[1] - arr[0];

    if(arr[arr.length-1] == step*arr.length){
        return 1
    } else {
        return 0;
    }
}
