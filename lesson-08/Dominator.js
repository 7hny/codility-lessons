// 100%
// https://app.codility.com/demo/results/trainingMS9KTP-M5Z/

function solution(A) {
    let count = 0;
    let candidate = -1;
    let lastVal = null;
    let n = A.length;

    for(i=0; i<n; i++){
        if(count == 0){
            lastVal = A[i];
            count ++;
        } else{
            if(A[i] == lastVal){
                count ++
            } else{
                count --;
            }
        }
    }

    candidate = lastVal;
    count = 0;
    index = -1;
    for(i=0; i<n; i++){
        if(A[i]==candidate){
            count ++;
            index = i;
        }
    }

    if(count > n/2){
        return index;
    }

    return -1;
}
