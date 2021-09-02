// function doubleIt(num) { //old process.
//     return num * 2;
// }

const doubleIt = function myFun(num){ //another old process.
    return num * 2
}

const result = doubleIt(5);
console.log(result);



/*..................ES6...............*/

const newProcess = num => num * 2;  //singlr arrow function.
const add = (x, y) => x + y;        //double arrow function.
const emptyParameter = () => 8;     //empty parameter function.
const math = (x, y) => {            //using { } bracket.
    const sum  = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result1 = newProcess(10);
const result2 = add(5,7);
const result3 = emptyParameter();
const result4 = math(7, 5);

console.log('ES6 arrow function 1: ', result1);
console.log('ES6 arrow function 2: ', result2);
console.log('ES6 arrow function 3: ', result3);
console.log('ES6 arrow function 4: ', result4);