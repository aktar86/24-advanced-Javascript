const numbers = [3, 5, 6, 6, 7, 8, 9, 10];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const square = element * element;
    output.push(square)
}
console.log(output)

const result = numbers.map(function(element){
    return element * element;
})


function square(element) {
    return element * element
}

const square = element => element * element;


const square = x => x * x;
const result2 = numbers.map(x=> x * x)

console.log(result2)