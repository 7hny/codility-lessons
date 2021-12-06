// 66%
// https://app.codility.com/demo/results/trainingJZ8XQT-KF3/

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let M = P.length;
    let str = S;
    // let genes = {
    //     "A":1,
    //     "C":2,
    //     "G":3,
    //     "T":4,
    // }

    // CAGCCTA

    let genes = {
        "A":[0],
        "C":[0],
        "G":[0],
        "T":[0],
    }

    function storeGene(input, gene, index){
        if(input === gene) {
            if(index == 0){
                genes[gene][index] = 1;
            } else {
                genes[gene][index] = genes[gene][index-1]+1;
            }
        } else {
            if(index > 0){
                genes[gene][index] = genes[gene][index-1]
            }
        }
    }

    for (var i = 0; i < str.length; i++) {

        // let gene = genes[str.charAt(i-1)];
        let gene = str.charAt(i);

        storeGene(gene, "A", i);
        storeGene(gene, "C", i);
        storeGene(gene, "G", i);
        storeGene(gene, "T", i);
    }

    let result = []

    loop2:
    for (var i = 0; i < M; i++) {
        let start = P[i];
        let end = Q[i];
        let offset = 0;

        if(start == end){
            offset = 1;
        }

        if((genes["A"][end] - genes["A"][start - offset])>0){
            result.push(1);
            continue loop2;
        } 

        if((genes["C"][end] - genes["C"][start - offset])>0){
            result.push(2);
            continue loop2;
        } 

        if((genes["G"][end] - genes["G"][start - offset])>0){
            result.push(3);
            continue loop2;
        } 
        
        if((genes["T"][end] - genes["T"][start - offset])>0){
            result.push(4);
            continue loop2;
        } 
    }

    // console.log(genes);
    // console.log(result);
    return result;
}
