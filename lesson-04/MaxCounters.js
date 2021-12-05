// 77%
// https://app.codility.com/demo/results/trainingG28SM3-CPW/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;

    let counter = new Array(N+1).fill(0);

    //console.log(counter)

    let lastMax = 0;

    for(let i=0; i<arr.length; i++){

        let item = arr[i];
        //let prevItem = arr[i-1];

        if(item <= N){
            counter[item] += 1;
            if(counter[item] > lastMax) lastMax = counter[item];
        }

        if(item == N+1){
            counter.fill(lastMax);
        } 
    }

    counter.shift();
    // console.log(counter)

    return counter;
}
