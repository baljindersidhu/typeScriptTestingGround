class Animal{
    private name: String;
    private category: String;

    constructor(animalName: String, category: String){
        this.name = animalName;
        this.category = category;
    }

    printAnimalInformation(): void{
        console.log(`${this.name} is a ${this.category}`);
    }

}

class City{
    private name: String;

    constructor(cityName){
        this.name = cityName;
    }

    getCityName(): String{
        return this.name;
    }
}

class Horse extends Animal{
    private city: City;

    constructor(animalName, animalCategory, animalCity){
        super(animalName, animalCategory);
        this.city = new City(animalCity);
    }

    printHorseInformation(): void{
        console.log('Horse Information: ');
        super.printAnimalInformation();
        console.log(`Belongs to City: ${this.city.getCityName()}`);
    }
}

let horse : Horse = new Horse("Boosh", "Horse", "Chandigarh");
horse.printHorseInformation();
