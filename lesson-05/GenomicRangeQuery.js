// 100%
// https://app.codility.com/demo/results/trainingWA9XJK-YZK/

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let M = P.length;
    let str = S;

    const geneMap = new Map()
    geneMap.set('A', 1);
    geneMap.set('C', 2);
    geneMap.set('G', 3);
    geneMap.set('T', 4);

    let genes = {
        "A":[0],
        "C":[0],
        "G":[0],
        "T":[0],
    }

    function storeGene(input, gene, index){
        if(input === gene) {
            genes[gene][index+1] = genes[gene][index]+1;
        } else {
            genes[gene][index+1] = genes[gene][index]
        }
    }

    for (var i = 0; i < str.length; i++) {

        let gene = str.charAt(i);

        storeGene(gene, "A", i);
        storeGene(gene, "C", i);
        storeGene(gene, "G", i);
        storeGene(gene, "T", i);
    }

    let result = []

    for (var i = 0; i < M; i++) {
        let start = P[i];
        // we start counting genes from zero and our gene preffix sum
        // is off by one, so pref sum array length length = M + 1;
        let end = Q[i]+1;
        let offset = 0;

        if((genes["A"][end] - genes["A"][start - offset])>0){
            result.push(1);
        } else if((genes["C"][end] - genes["C"][start - offset])>0){
            result.push(2);
        } else if((genes["G"][end] - genes["G"][start - offset])>0){
            result.push(3);
        } else if((genes["T"][end] - genes["T"][start - offset])>0){
            result.push(4);
        } 
    }

    // console.log(genes);

    return result;
}

// ('A', [0], [0])
// ('CAGCCTA', [0, 2, 5, 0], [0, 4, 5, 6])
// ('CA', [0, 0, 1], [0, 1, 1])
