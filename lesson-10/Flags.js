// 80%
// https://app.codility.com/demo/results/trainingQ33FXD-SY2/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    if(n<3) return 0;
    let peaks = [];


    for(i=1; i<n-1; i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){
            peaks.push(i);
        }
    }

    let nP = peaks.length;

    if(nP == 0) return 0;
    if(nP == 1) return 1;

    let flags = 1;
    let maxFlags = 0;

    // k = we check every possible number of flags but no more than peaks
    // or sqrt(n), whichever smaller
    for(let k = Math.min(nP, parseInt(Math.sqrt(n)))+1; k>=1; k--){
        let lastFlag = 0;
        flags = 1;
        // check the distance between flags
        // and count them to see if we can fit them onto available peaks
        for(i=1; i<peaks.length; i++){
            if(peaks[i] - peaks[lastFlag] >= k && flags < k){
                lastFlag = i
                flags++;
            }
        }
        // return max num of flags if we found it
        if(flags<maxFlags) return maxFlags;
        // if not store it to compare against further iterations
        else if(maxFlags<flags) maxFlags = flags;
    }

    return maxFlags;
}
