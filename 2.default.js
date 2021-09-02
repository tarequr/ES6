function add(value1, value2 = 38) {
    return value1 + value2;
}

const total = add(12); //here we passing one value but it's working default value 38.
//const total = add(12, 18); // here we passing two value... value1, value2
console.log('Total Value:',total);