// 100%
// https://app.codility.com/demo/results/training4VMDKW-GZY/

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];
    let n = A.length;
    let eaten = 0;

    for(i=0; i<n; i++){
        if(B[i] == 0){
            // downstream
            while(stack.length>0){
                // we count eaten fish
                if(stack[stack.length-1]<A[i]){
                    stack.pop();
                    eaten ++;
                } else if(stack[stack.length-1]>A[i]){
                    eaten ++;
                    break;
                }
            }
        } else {
            // upstream
            stack.push(A[i]);
        }
    }
    // we subtract eaten fish from total number of fish
    return n - eaten;

}
