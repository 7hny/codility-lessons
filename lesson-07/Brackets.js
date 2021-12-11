// https://app.codility.com/demo/results/trainingJDYW6M-8V3/
// 62%

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];

    let arr = Array.from(S)
    let n = arr.length;

    for(let i=0; i<n; i++){
        let char = arr[i];
        if(isOpen(char)){
            // push
            stack.push(char)
        } else {
            // pop close char & compare
            let openChar = stack.pop();
            if(!isMatching(openChar, char)){
                return 0;
            }
        }
    }

    return 1;

    function isOpen(str){
        return str == "{" || str == "(" || str == "[";
    }

    function isMatching(openChar, closeChar){
        return (openChar == "{" && closeChar == "}") || (openChar == "(" && closeChar == ")") || (openChar == "[" && closeChar == "]");
    }
}

// TEST
'{{{{'
'}}}}'
