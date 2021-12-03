// 81%
// https://app.codility.com/demo/results/trainingJP7XFZ-KXT/

// 72%
// https://app.codility.com/demo/results/trainingSJSED2-8ZP/

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let occurences = firstOccurence(A, X);
    let lastLeaf = -1;

    for(let i = 1; i<occurences.length; i++){
        if(occurences[i]===0 && X > 1) return -1;
        if(lastLeaf < occurences[i] ) lastLeaf = occurences[i];
    }

    return lastLeaf;
}

function firstOccurence(A, n){
    let occurences = new Array(n+1).fill(0);
    for(i=A.length-1; i>0; i--){
        occurences[A[i]]=i;
    }
    return occurences;
}
