function solution(A) {

    let arr = A;
    arr.sort((a,b)=> {
        return a-b
    })

    // empty, single or first element
    if(arr.length === 0) return 1;
    if(arr[0] !== 1) return 1;

    // missing last element
    if(arr[arr.length-1] !== arr.length+1) return arr.length+1;


    for(let i = 0; i<arr.length; i++){

        if(arr[i+1] && arr[i] !== arr[i+1]-1){
            return (arr[i+1]-1);
        }
    }
}
