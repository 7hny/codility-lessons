// 100%
// https://app.codility.com/demo/results/trainingXQS5FG-BW8/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A;
    let prefixSums = [arr[0]];
    let result = 0;

    for(i=1; i<arr.length; i++){
        prefixSums[i] = prefixSums[i-1] + arr[i];
    }

    // store last el cor readability
    let last = prefixSums[prefixSums.length-1];

    // for each car travelling east we can get number of cars crossed
    // by subtracting prefix sum at current position from total prefix sum 
    for(i=0; i<arr.length; i++){
        if(arr[i] == 0){
            result+= last - prefixSums[i];
            //  return -1 if the number of pairs of passing cars exceeds 1,000,000,000.
            if(result > 1000000000) return -1;
        }
    }

    return result;
}
