let numbers : Array<Number> = [1, 2, 3, 4];
let [first, second, ...rest] = numbers;
let numbers1 : Array<Number> = [0, ...numbers, 5];
console.log('=========================')
console.log('* Destructuring Array')
console.log(' ------------------------')
console.log(`| First  : ${first}`);
console.log(`| Second : ${second}`);
console.log(`| Rest   : ${rest}`);
console.log(`| Rest   : ${numbers1}`);
console.log(' ------------------------')
/*
======================================
 */
console.log('')
console.log('')
console.log('* Destructuring Object');
console.log(' ------------------------')
let User = {
    fname: 'Baljinder',
    mname: 'Singh',
    lname: 'Sidhu',
    courses: undefined
};

let {fname : firstName, courses = 'none', ...remaining} = User;
console.log(`| First Name : ${firstName}`);
console.log(`| Last Name  : ${remaining.lname}`);
console.log(`| Courses    : ${courses}`);
console.log(' ------------------------')

console.log('=========================')

