// 87%
// https://app.codility.com/demo/results/training7HWR9W-2EU/

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = Array.from(S);
    let stack = [];
    let n = arr.length;

    if(n%2 !== 0) return 0;

    let numOpen = 0;
    let numClose = 0;

    for(i=0; i<n; i++){
        let char = arr[i];

        if(char == "("){
            stack.push(char);
            numOpen ++;
        } else{
            if(stack.pop()){
                numClose++;
            } else{
                return 0
            }
        }
    }

    if(numOpen == numClose){
        return 1
    }else {
        return 0;
    }
}
