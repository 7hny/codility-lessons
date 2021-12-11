// https://app.codility.com/demo/results/trainingZC46QE-VQQ/
// 100%

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];

    let arr = Array.from(S)
    let n = arr.length;

    // reject all odd strings
    if(n%2 !== 0) return 0;

    let numOpen = 0;
    let numClose = 0;

    for(let i=0; i<n; i++){
        let char = arr[i];
        if(isOpen(char)){
            // push
            stack.push(char)
            numOpen++
        } else {
            // pop close char & compare
            let openChar = stack.pop();
            numClose++
            if(!isMatching(openChar, char)){
                return 0;
            }
        }
    }

    // test for cases like '{{{{'
    if(numOpen == numClose){
        return 1;
    } else {
        return 0;
    }

}

function isOpen(str){
    return str == "{" || str == "(" || str == "[";
}

function isMatching(openChar, closeChar){
    return (
        (openChar == "{" && closeChar == "}") ||
        (openChar == "(" && closeChar == ")") ||
        (openChar == "[" && closeChar == "]")
    );
}
// TEST
//'{{{{'
//'}}}}'
