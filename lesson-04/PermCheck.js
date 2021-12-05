// 100%
// https://app.codility.com/demo/results/trainingDF4C77-GH7/

function solution(A) {
    let arr = A;

    // instructions are not entirely clear, but essentially after sorting the array
    // we should geta sequence of consecutive integers starting from 1 like 1 or 1,2, or 1,2,3
    // so eg 1,3,5,7 or 2,3,4,5 is not a valid sequence
    arr.sort((a,b)=> {
        return a-b
    })

    if(arr[0]!== 1) return 0;
    if(arr[arr.length-1]!== arr.length) return 0;

    for(let i=1; i<arr.length-1; i++){
        let curr = arr[i];
        let prev = arr[i-1];
        let next = arr[i+1];

        if((prev !== curr-1) || (next !== curr+1)) return 0;
    }

    return 1;
}
