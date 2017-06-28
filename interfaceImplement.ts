interface Processor{
    core    : Number;
    chipset : String;
}

class Laptop implements Processor{
    
    core;
    chipset;
    private brandName: String;

    constructor(cr: Number, cs: String, brand: String){
        this.core = cr;
        this.chipset = cs;
        this.brandName = brand;
    }

    printLaptopDetails(): void{
        console.log(`${this.brandName} Laptop Details:`);
        console.log(`Laptop has ${this.core} cores`);
        console.log(`Laptop has ${this.chipset} chipset`);        
    }
}

let sony: Laptop = new Laptop(4, 'ARM', 'Sony');
sony.printLaptopDetails();