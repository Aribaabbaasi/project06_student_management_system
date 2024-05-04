#! /usr/bin/env node

import inquirer from "inquirer";

// Define the Student class
class Student{
    static counter = 10000;
    id: number;
    name: string;
    courses: string[];
    balance: number;

    constructor(name: string){
        this.id = Student.counter++;
        this.name = name;
        this.courses = []; //Initialize an empty array for courses
        this.balance = 100;
    };

    // Method to enroll a student in a course
    //tabnine: test|explain|document|ask
    enroll_course(course: string){
        this.courses.push(course);
    };

    // Method to view astudent balance
    //tabnine: test|explain|document|ask
    view_balance(){
        console.log(`balance for ${this.name} : ${this.balance}`);
    };

    payTuition(amount:number){
        this.balance = amount;
        console.log(`paid ${amount} towards tuition for all`);
    };

    showStatus(){
        console.log(`student details: 
        name: ${this.name};
        student id: ${this.id};
        Enroll courses: ${this.courses.join(',')};
        Balance: ${this.balance};
        `);
    };
};

const student_01 = new Student('Ariba Abbasi');
student_01.enroll_course("Science");
student_01.enroll_course("Maths");
student_01.view_balance();
student_01.payTuition(600);
student_01.showStatus();







