// 100%
// https://app.codility.com/demo/results/trainingB2AAAA-MWX/

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let minPrice = 200001;
    let profit = 0;
    let maxProfit = 0;
    let n = A.length;

    for(i=0; i<n; i++){
        if(A[i]< minPrice){
            profit = 0;
            minPrice = A[i];
        }

        profit =+ A[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}
