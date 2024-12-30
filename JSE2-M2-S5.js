/* 2.5.1 Static members */

/* These are fields that will not appear in the created object - they will
   be associated only with the class */
class AlmostEmptyClass {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!");
    };
    static sayHello() {
        console.log("Hello!");
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!
/* almostEmptyObject.sayHello(); // error */
AlmostEmptyClass.sayHello(); // -> Hello!  

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
    static isSameId(v1, v2) {
        return v1.id === v2.id;
    };
};
let vehicle1 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
let vehicle2 = new Vehicle({longitude: 0, latitude: 0, id: "AL1024"});
let vehicle3 = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1026"});
console.log(Vehicle.isSameId(vehicle1, vehicle2)); // -> true
console.log(Vehicle.isSameId(vehicle1, vehicle3)); // -> false

/* The static method can be defined not only in the body of the class
   using the static keyword */
Vehicle.isSameId = function(v1, v2) {
    return v1.id === v2.id;
};