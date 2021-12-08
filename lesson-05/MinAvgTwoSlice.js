// 100%
// https://app.codility.com/demo/results/trainingXY7656-Q42/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;
    let minAvg = null;
    // default pos 0 handles two element input array A
    let pos = 0;

    // we are looking for 2 or 3 element slices
    // this objective is not given in task description
    for(let i = 0; i < arr.length-2; i++){
        let sum1 = arr[i] + arr[i+1];
        let sum2 = sum1 + arr[i+2];
        let avg1 = sum1/2;
        let avg2 = sum2/3;
        let avg = (avg1<avg2) ? avg1 : avg2;

        if(minAvg == null || avg < minAvg){
            minAvg = avg;
            pos = i;
        }
    }

    // we nned to include value of a slide
    // that is omited in main loop iteration
    let avg = (arr[arr.length - 2] + arr[arr.length - 1])/2;
    if(avg < minAvg){
        pos = arr.length - 2;
    }

    return pos;
}
