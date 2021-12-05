// 100%
// https://app.codility.com/demo/results/trainingDF4C77-GH7/

function solution(A) {
    let arr = A;

    // instructiona are not entirely clear, but essentially we should get
    // a sequence of consecutive integers 1 .. N
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
