let inPut = [2, 3, -5, -2, -9]
let max = 0 // biến của phép nhân

function adjacentElementsProduct(Input){
    for(let i = 0 ; i<(Input.length-1);i++){
        
        if(max<(Input[i]*Input[(i+1)])){
            max = Input[i]*Input[i+1]
        }
    }
    
    console.log(max)
}

adjacentElementsProduct(inPut)
