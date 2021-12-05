// 11%
// https://app.codility.com/demo/results/trainingS4P2B6-Z2T/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;

    let counter = new Array(N+1).fill(0);

    for(let i=0; i<arr.length; i++){

        let item = arr[i];
        let prevItem = arr[i-1];
        //console.log(prevItem);
        if(item <= N){
            counter[item] += 1;
        }
        if(item == N+1){
            if(prevItem !== undefined) counter.fill(counter[prevItem]);
        }
        //console.log(counter[arr[i-1]])
        // console.log(counter[arr[i]])

        //console.log(counter)
    }

    counter.shift();

    return counter;

}
