interface User{
    readonly fname: String;
    lname: String;
    courses ?: Array<String>;
}

function logUser({courses = ["none"],...user} : User) : void{
    console.log('Interface: Param Restriction');
    console.log('-----------------------------------')
    console.log(`| First Name: ${user.fname}`);
    console.log(`| Last Name : ${user.lname}`);
    console.log(`| Courses   : ${courses}`);
}
let localUser = {
    fname : 'Baljinder',
    lname: 'Sidhu'
};
logUser(localUser);

function updateUser({courses='none',...user} : User) : void{
    user.lname = user.lname + ' updated';
    console.log('Interface: readonly keyword');
    console.log('-----------------------------------')
    console.log(`| First Name: ${user.fname}`);
    console.log(`| Last Name : ${user.lname}`);
    console.log(`| Courses   : ${courses}`);
}

updateUser(localUser);

console.log('Interface: Function Type');
console.log('-----------------------------------');
interface returnTypeForCourse {
    (source: String, subString: String) : boolean
}

let myFunc : returnTypeForCourse;
myFunc = function(src: String, substr: string){
    return src.search(substr) > -1;
}

let flag: boolean = myFunc('This', 'hi');
console.log(`flag is ${flag}`)