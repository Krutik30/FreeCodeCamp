// making simple object
let bhediya = {
    name: "YASH",
    numLegs: 4
  };
// printing it
console.log(bhediya);
// values by keys access by . dot and [] bracket
console.log(bhediya.name);
console.log(bhediya["numLegs"]);

// we can store function in object and it can call by .
// in object you can access object by this. = dog.
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function(){
      return "This dog has "+dog.numLegs+" legs.";
    },
    sayLegs2: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  dog.sayLegs();

// you can make object by function as 
// this is known as constructor
function Dog()
{
  this.name = "YASH";
  this.color="White";
  this.numLegs=4;
}
// by this created object we can make now object 
//new key word is require to make and while calling constructor

let hound = new Dog();

// abhi esa function bana ke call ke time object ki value de
// arg ki jaga kar deneka
function mDog(name,color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
let terrier = new mDog("kutta","kala");

// abhi agar ese function se banai hogi
// to instanceof true return karega varna false ;
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House;

// abhi function se bana object kon kon se property own karta hai
// wo check karke array me store kiye
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  let canary = new Bird("Tweety");
  let ownProps = [];
  for(let pro in canary)
  {
    if(canary.hasOwnProperty(pro))
      ownProps.push(pro);
  }

  // abhi function ban gaye or use bhi kar liya\
  // badme yaad aya ke pairo ke bina kya karenge
  // (kisme add karna ).prototype.(kya add karna) ese kar deneka
  // but console log ese prop ko dikhata nai hai 
  function Dog3(name) {
    this.name = name;
  }
  Dog3.prototype.numLegs = 4;
  beagle = new Dog3("Snoopy");

  // alag se add kiya hua property reta alag hi hai
  // exit kare access thay pan property print na thay hasown na batave
  function Dog(name) {
    this.name = name;
  }
  Dog.prototype.numLegs = 4;
  beagle = new Dog("Snoopy");
  ownProps = [];
  let prototypeProps = [];
  for(let prop in beagle)
  {
    if(beagle.hasOwnProperty(prop))
      ownProps.push(prop);
    else
      prototypeProps.push(prop);
  }

// instanceof() function bhi check karke de deta hai
// baki .constructor operator 
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog)
    return true;
  else
    return false;
}

// prototype me function add kara
// eat() karke bhi access hota hai
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  numLegs: 4,
  eat: function(){
    console.log("BHav bhav");
  },
  describe: function(){
    console.log("My name is "+this.name+" BHAv?");
  }
};

// constructor as a key 
// us object ke prototype ko overwrite karne se rokta hai
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// agar koi bhi object function se create hua hai
// to uska prototype he ke nai wo check karne ke lie
// isprototype function
function Dog(name) {
  this.name = name;
}
beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

// jiska koi nai uska bhi bhagwan hota hai
// bas esa scene hai ke Dog hai wo var banaye uska prototype hai
// yaha beagle ka malik Dog 
// par Object hai wo sabhi object ya uske function ke prototype ka 
// Godfather hai
// Object.prototype hai wo kisi bhi prototype ko darrsata hai
// isi lie to ham object. lka use karte hai function ke sath
function Dog(name) {
  this.name = name;
}
beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);  // yields true
Object.prototype.isPrototypeOf(Dog.prototype);

// pele to object ke function banaye 
// abhi wo function me bhi repeatedly data likhna pad raha hai
// to wo data nikalke 
// us function ke prototype me ham add kar denge hamara data
// abhi naye function ko call karke object banane vale function banayenge
function Cat(name) {
  this.name = name;
}
function Bear(name) {
  this.name = name;
}
function Animal() { 

}
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
Cat.prototype = {
  constructor: Cat
}
Bear.prototype = {
  constructor: Bear
}

// abhi prototype ko bhi prototype banake banayenge
// usko Object me store karenge
// access kese karenge Animal.prototype
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype); 

// ab samje ke ek supreme fucntion banaya jo object hai
// wo niche 6ote 6ote function banata hai jo khud object prototype hai
// or wo object bana rahe he
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
duck = Object.create(Animal.prototype); 
beagle = Object.create(Animal.prototype); 

// abhi ise ghum ghum ke object banayenge to 
// pta chalna hi hai ke native kaha se aayaa hai
// par ham dhoka karna hai to ham constructor likh denge ke uska name kya rakhe 
// jo ham likhnge wo dikhega
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;
duck = new Bird();
beagle = new Dog();
console.log(beagle.constructor);
console.log(duck.constructor);