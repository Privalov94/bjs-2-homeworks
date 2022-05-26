'use strict'

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let studentFirst = new Student("Tony", "male", 37)
 
Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {

  if ( this.marks === undefined) {
     this.marks = [mark]; // Первая оценка добавляется в массив
    } else {
     this.marks.push(mark); // Все остальные оценки пушатся
    }
}

Student.prototype.addMarks = function (...mark) {
  if ( this.marks === undefined) {
    this.marks = [...mark];
   } else {
    this.marks.push(...mark);
   }
}


Student.prototype.getAverage = function() {
  let sum = this.marks.reduce((acc, rate) => acc + rate);
  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.exclude = reason;
}


   







