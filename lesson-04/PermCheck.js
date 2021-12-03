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

// 58%
// https://app.codility.com/demo/results/trainingDW7G7J-NPT/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A;

    arr.sort((a,b)=> {
        return a-b
    })

    let sum = arr.reduce((acc, a)=>{
        return acc+a;
    }, 0)

    let step = arr[1] - arr[0];
    let calculatedSum = arr.length*(arr.length+step)/2

    return (sum === calculatedSum) ? 1 : 0;
}
