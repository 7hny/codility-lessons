// 100%
// https://app.codility.com/demo/results/trainingSWA77X-AAB/

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)

    let last = 0;
    let stack = [];
    let numBlocks = 0;

    for(let i=0; i<H.length; i++){
        if(H[i]>last){
            // levels are increasing
            // keep adding to stack and counting blocks
            stack.push(H[i]);
            numBlocks ++;
            last = H[i];
        } else if(H[i]<last){
            // levels are decreasing
            // pop all levels higher than current from the stack
            while(stack[stack.length-1] > H[i]){
                stack.pop();
            }
            // keep adding lower levels to the stack and count blocks
            if(H[i]!== stack[stack.length-1]){
                numBlocks++;
                stack.push(H[i]);
            }
            last = H[i];
        }
    }

    return numBlocks;
}
