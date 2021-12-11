// 100%
// https://app.codility.com/demo/results/trainingSJV5QT-B3U/

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let stack = 0;

    for (const c of S) {

        if(c == "("){
            stack ++;
        } else{
            if(stack>0){
               stack --
            } else{
                return 0
            }
        }
    }

    if(stack == 0){
        return 1
    } else {
        return 0;
    }
}
