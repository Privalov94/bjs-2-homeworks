'use strict'

function parseCount(number) {
    const parsedNumber = Number.parseInt(number);
    if (isNaN(parsedNumber)) {
        throw new Error ("Невалидное значение");
    } 
        return parsedNumber;
}

function validateCount(values) {
    try {
        return parseCount(values)
         
    }  catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b < c) || (a + c < b) || (b + c < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    
    getPerimeter() {
      let sum =  this.a + this.b + this.c;
        return sum;
    }

    getArea () {
        let p = this.getPerimeter() / 2 ;
        let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        s = s.toFixed(3);
        s = Number(s);
        return s;
    }
}


function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);

    } catch(err) {
        return  {
            getArea() {
                return "Ошибка! Треугольник не существует"; 
            }, getPerimeter() {
                return "Ошибка! Треугольник не существует"; 
            }
        }
    }
}      
     
 



