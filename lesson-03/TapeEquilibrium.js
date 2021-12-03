// https://app.codility.com/demo/results/trainingSZ3636-3TJ/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = A;

    let leftSum = 0;
    let rightSum = 0;
    let smallest = Number.MAX_SAFE_INTEGER;
    
    for(i = 0; i<arr.length; i++){
        rightSum += arr[i];
    }

    for(i = 0; i<arr.length-1; i++){

        leftSum += arr[i];
        rightSum -= arr[i];

        let sum = Math.abs(leftSum - rightSum);
        if(sum<smallest) smallest = sum;
    }

    return smallest;
}
