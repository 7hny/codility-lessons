// 100%
// https://app.codility.com/demo/results/trainingE92VZA-253/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;
    arr.sort((a, b) => (a-b));

    if(arr.length<3) return 0;

    for(let i=0; i<arr.length-2; i++){
        // if P+Q>R, then Q+R>P and P+R>Q is also true
        // after we find a triplet fullfilling this condition
        // we can prove that odrer of indices really does not matter
        if((arr[i] + arr[i+1]) > arr[i+2]) return 1;
    }

    return 0;
}
