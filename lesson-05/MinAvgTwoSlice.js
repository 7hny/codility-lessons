// 80%
// https://app.codility.com/demo/results/trainingMXZ32F-S9X/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;
    let minAvg = null;
    let pos = arr.length;

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

    return pos;
}
