class Species{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
animal(){
    console.log(`${this.name} is belongs to type ${this.type}`);
}
    
}
class Pets extends Species{
    constructor(name,type,home,eat){
        super(name,type);
        this.home=home;
        this.eat=eat;
    }
    vegetarian(){
        console.log(`${this.name}  belongs to type ${this.type} lives in ${this.home} and eat ${this.eat} is vegetarian`);
    }
    non_vegetarian(){
        console.log(`${this.name}  belongs to type ${this.type} lives in ${this.home} and eat ${this.eat} is non-vegetarian`);
    }
}
class Wild extends Species{
    constructor(name,type,voice){
        super(name, type);
        this.voice=voice;
    }
    speak(){
       console.log(`${this.name} is belongs to type ${this.type} can ${this.voice}`); 
    }
}
let species = new Species("Lion", "wild");
let pet = new Pets("dog","pet","house", "food");
let pet1 = new Pets("goat","pet","house", "food");
let wild = new Wild("Lion","wild","roar");

species.animal();
pet.non_vegetarian();
pet1.vegetarian();
wild.speak();