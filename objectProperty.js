const students = [
    {id: 151, name: "Aktar"},
    {id: 162, name: "Sami"},
    {id: 113, name: "Rahin"},
    {id: 184, name: "Shifa"},
    {id: 135, name: "Lamia"}
]; 

const result = [];
for(let i = 0; i < students.length; i++) {
    const element = students[i];
    const getElement = element.name;
    result.push(getElement)
}
console.log(result)


const names = students.map(s => s.name)
const ids = students.map(s => s.id)

const biggher = students.filter(s => s.id > 150) // next bigger every element will show
const biggherOne = students.find(s => s.id > 150) //next bigger one element will show
console.log(biggherOne)