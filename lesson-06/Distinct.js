// 100%
// https://app.codility.com/demo/results/trainingW87BNG-XF8/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A;
    arr.sort();
    let counter = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i-1]){
            counter ++;
        }
    }

    return counter;
}
