// 81%
// https://app.codility.com/demo/results/trainingPES2JQ-YKM/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr = A;
    let intersections = 0;
    //console.log(A)

    for(let i = 0; i<arr.length-1; i++){
        let iMin = i- arr[i];
        let iMax = i+ arr[i];

        //console.log(arr[i]);
        for(let j = i+1; j < arr.length; j++){
            let jMin = j - arr[j];
            let jMax = j + arr[j];

            if(jMin <= iMax && jMax >= iMin) intersections ++;

            if(intersections > 10000000) return -1;
        }
    }

    //console.log(intersections);

    return intersections;
}
