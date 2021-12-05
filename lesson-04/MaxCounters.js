// 22%
// https://app.codility.com/demo/results/trainingZ6PP6F-MEC/

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let arr = A;

    let counter = new Array(N+1).fill(0);

    //console.log(counter)

    let cursor = 0;

    for(let i=0; i<arr.length; i++){

        let item = arr[i];
        //let prevItem = arr[i-1];

        if(item <= N){
            counter[item] += 1;
        }
        if(item == N+1){
            counter.fill(counter[cursor]);
        } else {
            cursor = arr[i];
        }
        //console.log(counter[arr[i-1]])
        // console.log(counter[arr[i]])

        // console.log(counter)
    }

    counter.shift();
    // console.log(counter)


    return counter;

}
