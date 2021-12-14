// WIP

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    if(n<3) return 0;
    let peaks = []
    let peaksOcc = []

    for(let i = 1; i<n-1; i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){
            peaks.push(i);
            peaksOcc.push(1);
        } else{
            peaksOcc.push(0);
        }
    }

    let nP = peaks.length;
    let blockSize = parseInt(n/nP);
    let currentBlock = 0;
    //while(blockSize < n)
    let blockHasPeaks = false;
    for(let i = 0; i <n; i++){
        //if(peaksOcc[i] == 1) blockHasPeaks = true;
        //console.log(blockHasPeaks)
        if(i%blockSize==0){
            

                currentBlock++
                
                //blockHasPeaks = false;

        }
    }
    // for(let k = Math.min(nP, parseInt(Math.sqrt(n))+1); k>=1; k--){

    // }
    console.log(currentBlock);

    return currentBlock;
}
