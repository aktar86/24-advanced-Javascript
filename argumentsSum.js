function addNumber(num1, num2){
    // console.log(...arguments)
    let x = [...arguments];
    let y = 0;
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        y = y + element;
        
    }
    
    console.log(x)
    console.log(y)
    // return num1 + num2;
}

// const result = addNumber(2, 5, 7);
addNumber(2, 5, 7)
// console.log(result)