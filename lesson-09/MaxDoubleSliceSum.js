// 100%
// https://app.codility.com/demo/results/trainingVFDAAZ-UUH/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let n = A.length;
    if (n<3) return 0;

    let LR = new Array(n).fill(0);
    let RL = new Array(n).fill(0);
    
    let s = 0;
    for(let i=1; i<n-1; i++){
        s+=A[i];
        if(s<0) s=0;
        LR[i]=s;
    }

    s=0;
    for(let i = n-2; i>=1; i--){
        s+=A[i];
        if(s<0) s=0;
        RL[i]=s;
    }

    let m=0;
    for(let i=0; i<n-2; i++){
        m = Math.max(m, LR[i]+RL[i+2])
    }

    return m;
}
