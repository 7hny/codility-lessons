// https://app.codility.com/demo/results/trainingPBCRVE-ZKJ/
// 42%

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let divisors = 0;

    // brute force
    // for(let i=1; i<=N; i++){
    //     if(N%i==0) divisors ++;
    // }

    // greatest divisor is less or equal sqrt(N)
    // if n%a==0, then n/a is also divisor, hence incrementing by 2;
    let i = 0;

    while (i*i<N){
        if(N%i==0) divisors +=2;
        i++;
    }

    if(i*i == N) divisors =+1

    return divisors;
}
