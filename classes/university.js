'use strict'

class University {
    teachers = [];
    students = [];

    addMember(member) {
        if (member instanceof Teacher) {
            this.teachers.push(member);
            return;
        }
        if (member instanceof Student) {
            this.students.push(member);
            return;
        }
        throw('type error');
    }
    removeMember(member) {
        if (member instanceof Teacher) {
            this.teachers = this.teachers.filter((teacher) => {
                teacher !== member;
            });
            return;
        }
        if (member instanceof Student) {
            this.students = this.students.filter((student) => {
                student !== member;
            });
            return;
        }
        throw('type error');
    }
    startLesson() {
        this.teachers.forEach(teacher => {
            teacher.energy -= 5;
        });
        this.students.forEach(student => {
            student.energy -= 2;
        });
    }
}

class UniversityMember {
    name;
    age;
    role;
    energy;

    constructor(name, age, role, energy = 24) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.energy = energy;
    }

    info() {
        return [this.name, this.age, this.role, this.energy];
    }
}

class Teacher extends UniversityMember {
    constructor(name, age, energy = 24) {
        super(name, age, 'teacher', energy);
    }
}

class Student extends UniversityMember {
    constructor(name, age, energy = 24) {
        super(name, age, 'student', energy);
    }
}
