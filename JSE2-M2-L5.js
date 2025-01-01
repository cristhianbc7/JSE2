/*
LAB Code Challenge #5

Scenario

Create an 'ExtendedTutoring' class, inheriting from 'Tutoring'

Equip it with one new method: sendMessages(from, to, message). The 'from' argument
is the user (student or teacher) who sends the 'message'. The argument 'to' is the 
list of recipients (user objects).
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
    constructor({name, surname, email, role}) {
        super({name, surname, email, role})
    };
    set fullName(fullName) {
        [this.name, this.surname] = fullName.split(' ');
    };
    get fullName() {
        return `${this.name} ${this.surname}`;
    };
    static match(teacher, student, course) {
        let matched = [];
        for(let sCourse of student.courses) {
            for(let tCourse of teacher.courses) {
                if(sCourse.course === tCourse.course && sCourse.level <= tCourse.level) {
                    matched.push(sCourse);
                }
            }
        }
        if(course) {
            for(let mCourse of matched) {
                if(mCourse.course === course) {
                    return mCourse
                }
            }
            return null;
        } else {
            return matched;
        }
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

class Tutoring {
    constructor() { 
        this.students = []
        this.teachers = []
    };
    addStudent(name, surname, email) {
        for(let i = 0; i < this.students.length; i++) {
            if(this.students[i].name === name && this.students[i].surname === surname && this.students[i].email === email) {
                return;
            }; 
        };
        let newStudent = new Student({name, surname, email})
        this.students.push(newStudent);
    };
    addTeacher(name, surname, email) {
        for(let i = 0; i < this.teachers.length; i++) {
            if(this.teachers[i].name === name && this.teachers[i].surname === surname && this.teachers[i].email === email) {
                return;
            }
        }
        let newTeacher = new Teacher({name, surname, email});
        this.teachers.push(newTeacher);
    };
    getStudentByName(name, surname) {
        for(let student of this.students) {
            if(student.name === name && student.surname === surname) {
                return student;
            }
        }
        return undefined;
    };
    getTeacherByName(name, surname) {
        for(let teacher of this.teachers) {
            if(teacher.name === name && teacher.surname === surname) {
                return teacher;
            }
        }
        return undefined;
    };
    getTeacherForStudent(student) {
        let teachersForTutoring = [];
        for(let teacher of this.teachers) {
            for(let sCourse of student.courses) {
                for(let tCourse of teacher.courses) {
                    if(sCourse.course === tCourse.course && sCourse.level <= tCourse.level) {
                        teachersForTutoring.push(teacher)
                    };
                };
            };
        };
        return teachersForTutoring;
    };
    getStudentsForTeacher(teacher) {
        let studentsForTutoring = [];
        for(let student of this.students) {
            for(let sCourse of student.courses) {
                for(let tCourse of teacher.courses) {
                    if(sCourse.course === tCourse.course && sCourse.level <= tCourse.level) {
                        studentsForTutoring.push(student)
                    };
                };
            };
        };
        return studentsForTutoring;
    };
};

class ExtendedTutoring extends Tutoring {
    constructor() {
        super()
    }
    sendMessages(from, to=[], message) {
        if(from && to.length) {
            for(let target of to) {
                target.sendMessage(from, message);
            }
        }
    };
};

/* Test your solution using the following code */
let tutoring = new ExtendedTutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let to = [];
to.push(tutoring.getStudentByName('Rafael', 'Fife'));
to.push(tutoring.getStudentByName('Kelly', 'Estes'));
tutoring.sendMessages(tutoring.getTeacherByName('Paula', 'Thompkins'), to, 'test message');
for(let user of to) {
    user.showMessagesHistory();
}
// -> PaulaThompkins@jourrapide.com -> rfife@rhyta.com: test message
// -> PaulaThompkins@jourrapide.com -> k_estes@dayrep.com: test message