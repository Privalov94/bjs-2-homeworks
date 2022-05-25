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

Student.prototype.addMarks = function (mark1, mark2,  mark3, ...rest) {
  if ( this.marks === undefined) {
    this.marks = [mark1, mark2, mark3];
   } else {
    this.marks.push(mark1, mark2, mark3);
   }
}


Student.prototype.getAverage = function() {
  return this.marks.reduce((mark1, mark2, mark3) => (mark1 + mark2 + mark3) / this.marks.length)
}

Student.prototype.exclude = function (reason) {
   delete this.subject;
   delete this.marks;
   this.exclude = reason;
}


   







// ваш код для остальных методов