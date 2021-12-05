// 100%
// https://app.codility.com/demo/results/trainingR42NKD-GVN/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;
    let counter = new Array(N+1).fill(0);
    let lastMax = 0;
    let max = 0;

    for(let i=0; i<arr.length; i++){

        let item = arr[i];

        if(item <= N){
            // update currenly processed couter to lst max couter value
            if(counter[item] < max) counter[item] = max;
            counter[item] += 1;
            // remember last maximum couter value
            if(counter[item] > lastMax) lastMax = counter[item];
        }

        if(item == N+1){
            max = lastMax;
        } 
    }

    counter.shift();

    for(let i=0; i<counter.length; i++){
        // fill remaining zero value counters
        if(counter[i] < max) counter[i] = max;
    }

    return counter;
}
