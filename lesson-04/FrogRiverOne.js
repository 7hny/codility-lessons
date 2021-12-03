// 81%
// https://app.codility.com/demo/results/trainingJP7XFZ-KXT/

// 72%
// https://app.codility.com/demo/results/trainingSJSED2-8ZP/

// 100% as per https://gist.github.com/matheushf/d1237d8d78865b328d63a96f6c632c36
// https://app.codility.com/demo/results/trainingEG9FXJ-EME/

function solution(X, A) {
    // write your code in JavaScript (Node.js 6.4.0) 

    let sequence = [0];
    let seconds = -1;
    let counter = 0;

    if (X === 1 && A[0] === 1)
        return 0;

    for (let i = 0; i <= A.length - 1; i++) {

        if (A[i] <= X) {
            if (!sequence[A[i]]) {
                // we count each unique jump
                counter++;
            }
            // we flag a jump taht we counted
            sequence[A[i]] = 1;

            if (counter === X) {
                // solution is a loop iteration index when last jump was counted
                seconds = i;
                break;
            }
        }
    }
    return seconds;
}
