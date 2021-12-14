// 33%
// https://app.codility.com/demo/results/training9535JZ-5G7/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let peaks = [];

    for(i=1; i<n-1; i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){
            peaks.push(i);
        }
    }

    // console.log(peaks);

    let lastFlag = null;
    let flags = 0;
    for(i=0; i<peaks.length; i++){
        if(lastFlag == null){
            lastFlag = peaks[i];
            flags++;
        }
        else if(peaks[i] - lastFlag >= peaks.length){
            lastFlag = peaks[i]
            flags++;
        }
    }

    return flags
}
