// 100%
// https://app.codility.com/demo/results/trainingURTAVD-2BE/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let divisors = 0;

    // brute force
    // for(let i=1; i<=N; i++){
    //     if(N%i==0) divisors ++;
    // }

    // greatest divisor is less or equal sqrt(N)
    // if n%a==0, then n/a is also divisor, hence incrementing by 2;
    let i = 1;

    while (i*i<N){
        if(N%i==0) divisors +=2;
        i+=1;
    }

    if(i*i == N) divisors +=1

    return divisors;
}
