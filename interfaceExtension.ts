interface Living{
    environment: String;
}

interface Bird extends Living{
    wings: Number;
}

interface Sparrow extends Living, Bird{

}

let bird = <Sparrow>{};
bird.wings = 2;
bird.environment = 'air';

console.log(`Printing Bird: `);
console.log(`Wings: ${bird.wings}`);
console.log(`Environment: ${bird.environment}`);
