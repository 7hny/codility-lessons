// 100%
// https://app.codility.com/demo/results/training2ZVQ8P-HUC/

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let i=0;
    let perimeter = N*2+2;

    while(i*i<N){
        if(N%i==0){
            //let tempPerimeter = i*(N/i);
            perimeter = Math.min(perimeter, 2*(i+(N/i)))
        }
        i++;
    }
    if(i*i == N){
        perimeter = Math.min(perimeter, i*4);
    }

    return perimeter;
}
