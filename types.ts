enum Color {Red=1, Green, Blue};

let i : String = 'Baljinder';
let num : Number = 22;
let message: string = `Hello my name is ${i} and I am ${num} years old!`
let redColor : Color = Color.Red;
let blueColor : Color = Color.Blue;
let greenColor : string = Color[2];

console.log(message);
console.log('-----------------------');
console.log('Arrays');

let numArray : number[] = [1,2,3,4,5];
let numArray1: Array<number> = [6,7,8,9,0];

numArray.forEach(function(node, index){
    let msg = `Value at ${index} is: ${node}`
    console.log(msg);
})
numArray1.forEach(function(node, index){
    let msg = `Value at ${index} is: ${node}`
    console.log(msg);
})
console.log('-----------------------');
console.log('Enums');

console.log(`Red Color: ${redColor}`);
console.log(`Red Color: ${blueColor}`);
console.log(`Color located at 2 is: ${greenColor}`);

console.log('-----------------------');
console.log('Functions');

function Hello(firstName: String): String{
    return `Hello ${firstName}`;
}