// 1-oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function retornaNumeros(){
    const arrayNum = []
    let inicia = 1

    while(inicia <= 20){
        arrayNum.push(inicia)
        inicia++
    }
    return arrayNum
}
//console.log(retornaNumeros())


//2-evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

function retornaPares(number){
    const arrayNum = []

    for(let i=0; i<number; i++){
        if(i % 2 === 0){
            arrayNum.push(i)
        }
    }
    return arrayNum
}
//console.log(retornaPares(20))


// 3-oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

function retornaImpar(number){
    const arrayNum = []

    for(let i=0; i<number; i++){
        if(i % 2>0){
            arrayNum.push(i)
        }
    }
    return arrayNum
}
//console.log(retornaImpar(20))


//4- multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

function retornaMultiplos(number){
    const arrayNum = []

    for(let i=0; i<number; i++){
        if(i % 5 === 0){
            arrayNum.push(i)
        }
    }
    return arrayNum
}
//console.log(retornaMultiplos(100))



// 5- squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

function retornaQuadrados(){
    const arrayNum = []

    for(let i = 1; i*i <=100; i+=1){
        arrayNum.push(i*i)
    }
    return arrayNum
} 
//console.log(retornaQuadrados())  


// 6-countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

function retornoInverso(){
    const arrayNum = []

    for(let i = 20; i>0; i--){
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornoInverso())


// 7-evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)

function retornaInversoPares(){

   const arrayNum = []

    for(let i = 20; i>0; i-=2){
        arrayNum.push(i)
    }
    return arrayNum
}   
//console.log(retornaInversoPares())


// 8-oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)

function retornaInversoImpares(){
    const arrayNum = []

    for(let i = 19; i>0; i-=2){
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(retornaInversoImpares())    


// 9-multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

function multiplosInversos(){
    const arrayNum = []

    for(let i = 100; i>0; i-=5){
        arrayNum.push(i)
    }
    return arrayNum
}
//console.log(multiplosInversos())


// 10-squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

function retornaQuadradosInverso(){
    const arrayNum = []

    for(let i = 100; i*i; i-=1){
        if(i*i <=100)
        arrayNum.push(i*i)
    }
    return arrayNum
}
//console.log(retornaQuadradosInverso())   