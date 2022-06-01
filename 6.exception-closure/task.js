'use strict'

function parseCount(number) {
    const parsedNumber = Number.parseInt(number);
    if (isNaN(parsedNumber)) {
        throw new Error ("Невалидное значение");
    } else {
        return parsedNumber;
    }
}

function validateCount(values) {
    try {
        parseCount(values);
        const parsedValues = Number.parseInt(values);
        if (isNaN(parsedValues)) {
            throw new Error ("Невалидное значение");
        } else {
            return parsedValues;
        }
        
    }  catch (err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a + this.b > this.c) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        if(this.a + this.c > this.b) {
            throw new Error("Треугольник с такими сторонами не существует");
        } 
        if(this.b + this.c > this.a) {
            throw new Error("Треугольник с такими сторонами не существует"); 
        }
    }
    
    getPerimeter() {
      let sum =  this.a + this.b + this.c;
        return sum;
    }

    getArea () {
        let p = (this.a + this.b + this.c) * 0.5;
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
     
 



