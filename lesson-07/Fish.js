// 37%
// https://app.codility.com/demo/results/trainingKA2RM9-NMT/

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];
    let n = A.length;
    let survivals = 0;

    for(i=0; i<n; i++){
        if(B[i] == 0){
            // downstream
            if(stack.length>0){
                if(stack[stack.lenght-1]<A[i]){
                    stack.pop();
                }
            } else {
                survivals++;
            }
        } else {
            // upstream
            stack.push(A[i]);
        }
    }

    return survivals+stack.length;
}
