/* 2.4.1 Inheritanece */

/* To indicate that a class inherits methods and properties
   from another class, we use the keyword extends */
class Vehicle {
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.position = {latitude, longitude};
        this.status = "unavailable";
    };
    set position({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    get position() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        };
    };
};

class Bus extends Vehicle {
    constructor({seats, id, latitude, longitude}) {
        super({id, latitude, longitude});
        this.seats = seats;
    };
};
let bus = new Bus({seats: 4, longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(bus.seats); // -> 4
console.log(bus.id); // -> "AL1024"

/* 2.4.2 Shadowing */

/* So remember that during inheritance, new fields shadow the old ones
   if they have the same names. You can access the base class fields from
   inside the new methods using the super keyword instead of this. */
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!");
    };
};
class ExtendedClass extends AlmostEmptyClass {
    constructor(name) {
        super("I'm super ...");
        this.name = name;
    };
    sayHi() {
        console.log(`Hi ${this.name}!`);
    };
    newHi() {
        this.sayHi();
    };
    oldHi() {
        super.sayHi();
    };
};
let obj = new ExtendedClass("Bob"); // -> I'm super ...
obj.sayHi(); // -> Hi Bob!
obj.newHi(); // -> Hi Bob!
obj.oldHi(); // Hi!

/* 2.4.3 Inheritance from a constructor function */

let AlmostEmpty = function(sth) {
    console.log(sth);
    this.sayHi = function() {
        console.log("Hi!");
    };
};
class ExtendedClass2 extends AlmostEmpty {
    constructor(name) {
        super("I'm super ...");
        this.name = name;
    };
    sayHi() {
        console.log(`Hi ${this.name}!`);
    };
};
let obj2 = new ExtendedClass2("Bob");
obj2.sayHi(); // -> Hi Bob!