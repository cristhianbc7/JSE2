/*
LAB Code Challenge #2

Scenario

Create a new class, 'ExtendedUser', that will inherit from the 'User' class.

Put a setter and getter named 'fullName' in it. The getter should return the first name
and last name concatenated into one string. The setter takes the concatenated first
and las name (e.g. 'Rafael Fifer') and splits it into first and last name (the split
method), changing the appropriate properties of the object.

Based on the 'ExtendedUser' class, create two more classes, 'Teacher' and 'Student'
(inheritance). They should not have any new methods or properties, but only the 
default roles in their constructors to 'teacher' or 'student' respectively
(i.e. their constructors will take three parameters instead of four: name, surname, and
email);
*/
function sendEmail(from, to, message) {};

class User {
    constructor({name, surname, email, role}) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messages = [];
    };
    addCourse(course, level) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                return;
            };
        };
        this.courses.push({course, level});
    };
    removeCourse(course) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses.splice(i,1);
                break;
            };
        };
    };
    editCourse(course, level) {
        for(let i = 0; i < this.courses.length; i++) {
            if(this.courses[i].course === course) {
                this.courses[i].level = level;
                break;
            };
        };
    };
    sendMessage(from, message) {
        this.messages.push({from: from.email, to: this.email, content: message});
        sendEmail(from.email, this.email, message);
    };
    showMessagesHistory() {
        for(let message of this.messages) {
            console.log(`${message.from} -> ${message.to}: ${message.content}`);
        };
    };
};

class ExtendedUser extends User {
    set fullName(fullName) {
        [this.name, this.surname] = fullName.split(' ');
    };
    get fullName() {
        return `${this.name} ${this.surname}`;
    };
};

class Teacher extends ExtendedUser {
    constructor({name, surname, email, role}) {
        super({name, surname, email});
        this.role = 'teacher';
    };
};

class Student extends ExtendedUser {
    constructor({name, surname, email, role}) {
        super({name, surname, email});
        this.role = 'student';
    };
};

/* Test your solution using the following code: */
let student1 = new Student({name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com'});
let student2 = new Student({name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com'});
let teacher1 = new Teacher({name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com'});
student1.addCourse('maths', 2);
teacher1.addCourse('biology', 3);
teacher1.addCourse('chemistry', 2);
teacher1.editCourse('chemistry', 4);
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fife: 1 courses
console.log(`${teacher1.fullName}: ${teacher1.courses.length} courses`); // -> Paula Thompkins: 2 courses
student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`); // -> Rafael Fifer: 1 courses