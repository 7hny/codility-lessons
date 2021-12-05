// 100%
// https://app.codility.com/demo/results/trainingR53Z9Z-7S9/

function solution(A) {
    let arr = A;
    arr.sort((a,b)=>{
        return a-b;
    })
    let firstIndex = arr.findIndex(item => item === 1);
    if (firstIndex < 0) return 1;

    let lastItem = 1;

    for(let i = firstIndex; i<arr.length; i++){

        if(arr[i] === lastItem) lastItem ++;
    }

    return lastItem;
}
