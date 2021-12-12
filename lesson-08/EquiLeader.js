// 100%
// https://app.codility.com/demo/results/trainingTREGDS-J6Y/

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
    let occurences = [];
    for(i=0; i<n; i++){
        if(A[i]==candidate){
            count ++;
        }
        // prefix sum of occurences
        occurences[i] = count;
    }

    let numEquileaders = 0;

    for(i=0; i<n; i++){
        let occ = occurences[i];
        // find if there are equileaders on both sides
        if((occ*2 > i+1) && ((count - occ)*2 > n-1-i)){
            numEquileaders++
        }
    }

    return numEquileaders;
}
