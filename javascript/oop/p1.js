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
  let beagle = new Dog3("Snoopy");

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

function Dog(name) {
  this.name = name;
}
beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);

function Dog(name) {
  this.name = name;
}

beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);


function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

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