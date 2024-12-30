/* 2.1.1 Class declaration */

/*
    let Vehicle = function({id, latitude, longitude}) {
        this.setPosition = function({latitude, longitude}) {
            this.time = Date.now();
            this.longitude = longitude;
            this.latitude = latitude;
        };
        this.getPosition = function() {
            return {
                latitude: this.latitude,
                longitude: this.longitude
            };
        };
        this.id = id; 
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    let vehicle1 = new Vehicle({id: "AL1024", latitude: 59.367647, longitude: 18.213451});
    let vehicle2 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
 */

/* The simplest form class declaration and use to create an object
   can look like this: */
class EmptyClass {};
let emptyObject = new EmptyClass;

/* Additionally, each class should have a constructor, that is, a function
   that will be called when creating a new object on its basis.
   The constructor is not given a name, but in each class it is named
   the same way: constructor */
/*
    class AlmostEmptyClass {
        constructor(sth) {
            console.log(sth);
        };
        sayHi() {
            console.log("Hi!");
        };
    };
    let almostEmptyObject = new AlmostEmptyClass(120); // -> 120
    almostEmptyObject.sayHi(); // -> Hi!
*/

class Vehicle {
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.status = "unavailable";
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.longitude = longitude;
        this.latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.latitude,
            longitude: this.longitude
        }; 
    };
};
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
vehicle.setPosition({longitude: 18.193121, latitude: 59.378654});
console.log(vehicle.getPosition());

/* 2.1.2 Class expression */

/* The ability to store a function in a variable (i.e. a function expression)
   indicates that functions in JavaScript are first-class citizens */
function namedFunction() {
    console.log("I'm named, I hope ... ");
};
let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...");
};
let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...");
};
namedFunction(); // -> I'm named, I hope ...
anonymousFunction(); // -> I'm a bit anonymous ...
notExactlyAnonymousFunction(); // -> I'm confused ...

/* The same is tru for classes */
let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!");
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!

/* 2.1.3 The instance of operator */

console.log(typeof almostEmptyObject); // -> "object"

/* In every object we will find the field constructor */
console.log(almostEmptyObject.constructor.name); // -> "AlmostEmptyClass"

/* However, the instanceof operator is used more often in practice than
   constructor.name */
console.log(almostEmptyObject instanceof AlmostEmptyClass); // -> true
console.log(almostEmptyObject instanceof String); // -> false
let str = new String("test me");
console.log(str instanceof String); // -> true

/* All objects created with the usage of classes inherit implicitly
   from the Object class */
console.log(almostEmptyObject instanceof Object); // -> true