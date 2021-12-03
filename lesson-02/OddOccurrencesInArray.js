// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let aa = A;

    aa.sort(function(a, b) {
        return a - b;
    });

    for(i=0; i<aa.length; i+=2){
      if(aa[i] !== aa[i+1]) return aa[i];
    }
}
