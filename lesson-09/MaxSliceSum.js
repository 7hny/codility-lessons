// 100%
// https://app.codility.com/demo/results/training36XW7A-HUY/

function solution(A) {
    let n = A.length;
    let sum = 0;
    // important! init with first element value af initial max slice value
    // this will allow ta take small sets with megative max slice value into account
    let maxSlice = A[0];

    // Kadane's algorithm:
    // when sum at current position is lesset than current position value
    // it's best to consider starting a new slice using current position value
    for(let i=0; i<n; i++){
        sum += A[i];
        if(A[i]>sum) sum = A[i];
        maxSlice = Math.max(maxSlice, sum);
    }

    return maxSlice;
}
