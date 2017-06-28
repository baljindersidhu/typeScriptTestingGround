class Shouter{
    public sayHello(name: String) : String;
    public sayHello(names: Array<String>) : String;

    public sayHello(names: any) : String{
        if(typeof names ==="object"){
            let output: String = "";
            for(let i=0; i<names.length; i++){
                if(i !=0){
                    output = output + " ";
                }
                output = output + names[i]
            }
            return output;
        }else{
            return names;
        }
    }
}

let shouter: Shouter = new Shouter();
let names: Array<String> = [
    "Baljinder",
    "Singh"
];
console.log(`${shouter.sayHello("Baljinder")} says Hello!`);
console.log(`${shouter.sayHello(names)} says Hello!`);

