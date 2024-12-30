/* 2.6.1 Classes vs. constructors */

class TestClass {
    constructor(arg) {
        this.arg = arg;
        console.log(this.arg);
    };
    showSth() {
        console.log("I'm prototyped!");
    };
    static showSth() {
        console.log(`Hi, I'm static!`);
    };
};
let test = new TestClass("Hello"); // -> Hello
test.showSth(); // -> I'm prototyped!
TestClass.showSth(); // -> I'm static
console.log(test instanceof TestClass); // -> true

let Test = function(arg) {
    this.arg = arg;
    console.log(this.arg);
};
Test.prototype.showSth = function() {
    console.log("I'm prototyped!");
};
Test.showSth = function() {
    console.log(`Hi, I'm static!`);
};
let test2 = new Test("Hello"); // -> Hello
test2.showSth(); // -> I'm prototyped!
Test.showSth(); // -> I'm static!
console.log(test2 instanceof Test); // -> true

/* If we had written normal code and not a reference code for comparison,
   we would probably create something like this: */
let Test2 = function(arg) {
    this.arg = arg;
    this.showSth = function() {
        console.log("I'm prototyped!");
    };
    console.log(this.arg);
};
Test2.showSth = function() {
    console.log(`Hi, I'm static!`);
};