const addSum = [2, 7, 3];
let addedSum = 1;
for (let i = 0; i < addSum.length; i++) {
    const element = addSum[i];
    addedSum = element / addedSum;
}
console.log(addedSum)

