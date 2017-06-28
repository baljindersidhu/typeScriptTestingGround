abstract class Animal{
    private category: String;
    private name: String;

    constructor(categoryName: String){
        this.category = categoryName;
    }

    protected getName() : String{
        return this.name;
    }

    protected setName(animalName) : void{
        this.name = animalName;
    }

    protected getCategory() : String{
        return this.category;
    }
}

class Horse extends Animal{
    private type: String;

    constructor(horseType: String, horseName: String){
        super("Horse");
        super.setName(horseName);
        this.type = horseType;
    }

    public displayHorse() : void{
        console.log(`This ${super.getCategory()} of type: ${this.type} has name ${this.getName()} `);
    }
}

let boosh: Horse = new Horse("Black", "Boosh");
boosh.displayHorse();

