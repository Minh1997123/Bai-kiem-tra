let inPut = [60, 40, 55, 75, 64]
let outPut = []
let weightTeam1 = 0
let weightTeam2 = 0

function alternatingSums(a){
for(let i = 0 ; i<a.length;i++){
    if(i%2 == 0 ){
      weightTeam1 = weightTeam1+a[i]
    }
    if(i%2 == 1){
        weightTeam2 = weightTeam2+a[i]
    }
}
outPut.push(weightTeam1)
outPut.push(weightTeam2)
console.log(outPut)
}

alternatingSums(inPut)