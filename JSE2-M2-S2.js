/* 2.2.2 Property definitions inside class methods */

/*
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
*/


/* 2.2.3 Direct declaration inside the class body */

/*
    class Vehicle {
        status = "unavailable";
        constructor({id, latitude, longitude}) {
            this.id = id;
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
*/

/* NOTE: Declaring both public and private property in the body
   of the class is an "experimental feature" */
/* We declare a private property in the body of a class,
   and we mark its "privacy" by starting the name with # */
class Vehicle {
    status = "unavailable";
    #longitude;
    #latitude;
    constructor({id, latitude, longitude}) {
        this.id = id;
        this.setPosition({latitude, longitude});
    };
    setPosition({latitude, longitude}) {
        this.time = Date.now();
        this.#longitude = longitude;
        this.#latitude = latitude;
    };
    getPosition() {
        return {
            latitude: this.#latitude,
            longitude: this.#longitude
        };
    };
}
let vehicle = new Vehicle({longitude: 18.213423, latitude: 59.367628, id: "AL1024"});
console.log(vehicle.getPosition());
/* console.log(vehicle.#longitude); // error */

