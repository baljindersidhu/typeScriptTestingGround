class Kohinoor{

    private static instance: Kohinoor;
    private name: String;

    private constructor(diamondName: String){
        this.name = diamondName;
    }

    public static getKohinoor(): Kohinoor{
        if(!this.instance){
            this.instance = new Kohinoor("Kohinoor");    
        }
        return this.instance;
    }

    public showInformation(): void{
        console.log(`${this.name} Diamond`);
    }

}

let diamond: Kohinoor = Kohinoor.getKohinoor();
diamond.showInformation();