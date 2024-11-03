function joinName(firstName, lastName){
    const getFullName = [...arguments].join();
    return getFullName;
}

const result = joinName('Omuk', 'Hasan', 'limon')
console.log(result)