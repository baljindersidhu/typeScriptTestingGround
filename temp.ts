let numbers : Array<Number> = [1,2,3,4,5,6,7,8,9];
let [first, second, ...rest] = numbers;
console.log(`First: ${first}`);
console.log(`First: ${second}`);
console.log(`First: ${rest}`);

let object = {
    fname: 'Baljinder',
    lname: 'Sidhu',
    mname: 'Singh',
    courses: undefined
}

let {fname: firstName, courses='none', ...restOfObject} : {fname:String, courses: String} = object;
console.log(`FirstName: ${firstName}`);
console.log(`Courses: ${courses}`);